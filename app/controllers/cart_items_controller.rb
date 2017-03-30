class CartItemsController < ApplicationController

  def create
    @cart = Cart.find(params[:id])
    item = @cart.cart_items.new(inventory_id)
    if item.save
      render json: item
    else
      render json: item.errors.full_messages
    end
  end

  # update cart item
  def update
    item = CartItem.find(params[:id])
    if item.update
      
  end

  # delete cart item
  def destroy
  end

end
