class CartItemsController < ApplicationController

  def create
    @cart = Cart.find(params[:id])
    item = @cart.cart_items.create!(inventory_id)
    render json: item
  end

  # update cart item
  def update
    item = CartItem.find(params[:id])
    if 
  end

  # delete cart item
  def destroy
  end

end
