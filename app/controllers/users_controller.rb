class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.welcome_email(@user).deliver
      render json: @user, status: 200
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.permit(:email, :name, :password, :address)
  end
end
