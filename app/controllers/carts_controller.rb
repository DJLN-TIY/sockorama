class CartsController < ApplicationController

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
    cart = Cart.find(params[:id])
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

  private

end
