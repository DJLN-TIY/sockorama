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

  # def require_user
  #   unless current_user
  #     render status: 400
  #   end
  # end

  def current_cart
    return current_user.cart if current_user
    @current_cart ||= Cart.find_by(cart_token: params[:cart_token]) if params[:cart_token]
  end

end
