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
    return @cart if @cart
    if params[:cart_token]
      @cart = Cart.find_by(token: params[:cart_token])
    elsif current_user && current_user.cart
      @cart = current_user.cart
    elsif current_user
      @cart = current_user.cart.create!
    else
      @cart = Cart.create!
    end
  end

end
