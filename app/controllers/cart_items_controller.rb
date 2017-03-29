class CartItemsController < ApplicationController

  def create
    @cart = Cart.find(:id)
    @cart.cart_items.create!(inventory_id)
  end

end
