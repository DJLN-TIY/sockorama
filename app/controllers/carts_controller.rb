class CartsController < ApplicationController

  def show
    render json: current_cart
  end

  def start_checkout
    cart = current_cart
    cart.total = cart.calculate_total
    render json: cart
  end

  def finalize_checkout
    cart = current_cart
    cart.total = cart.calculate_total
    cart.adjust_quantity
    Stripe::Charge.create(
      source: params[:stripeToken],
      amount: cart.total,
      description: "Order #{cart.id}",
      currency: 'usd'
    )
    cart.checkout!

    render cart, status: 200
  end

end
