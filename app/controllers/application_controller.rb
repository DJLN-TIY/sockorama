class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  # def static
  #   render file: "public/index.html", status: 200
  # end

  private

  def current_user
    @current_user ||= User.find_by(token: params[:token]) if params[:token]
  end

  def require_user
    unless current_user
      flash[:warning] = 'You need to login, first.'
      redirect_to :login
    end
  end

end
