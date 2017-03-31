class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.welcome_email(@user).deliver
      render json: @user, serializer: UserExtendedSerializer, status: 200
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.permit(:email, :name, :password, :address)
  end
end
