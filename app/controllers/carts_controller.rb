class CartsController < ApplicationController

  def index
    carts = Cart.all
    render json: carts
  end

  def show
    cart = Cart.find(params[:id])
    render json: cart
  end

  def create
    if current_user
      cart = Cart.new(current_user.id)
      if cart.save
        render json: cart
      else
        render json: cart.errors.full_messages, status: 400
      end
    else
      cart = Cart.create!
      render json: cart
    end
  end

  def add_items
    cart = Cart.find_by(cart_token: params[:cart_token])
    cart.cart_items.new(
      inventory_id: params[:inventory_id],
      quantity: params[:quantity]
    )
    if cart.save
      render json: cart.cart_items
    else
      render json: cart.cart_items.errors.full_messages
    end
  end

  def start_checkout
    cart = Cart.find_by(cart_token: params[:cart_token])
    total = cart.calculate_total
    render json: { total: total }
  end

  def finalize_checkout
    cart = Cart.find_by(cart_token: params[:cart_token])
    total = cart.calculate_total
    cart.adjust_quantity
    charge = Stripe::Charge.create(
      source: params[:stripeToken],
      amount: total,
      description: "Order #{cart.id}",
      currency: 'usd'
    )
    cart.checkout!
    render status: 200
  end

  private

end
