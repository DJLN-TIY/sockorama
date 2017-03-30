class CartItemsController < ApplicationController

  def create
    @cart = Cart.find(params[:id])
    @cart.cart_items.create!(inventory_id)
  end

  # update cart item
  def update
    @cart_item = CartItem.find(params[:id])
  end

  # delete cart item
  def destroy
  end

end
