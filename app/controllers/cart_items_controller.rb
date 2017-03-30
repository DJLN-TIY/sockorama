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
    item = current_cart.cart_items.find(params[:id])
    if item.update(quantity: params[:quantity])
      render json: item
    else
      render json: item.errors.full_messages
    end
  end

  # delete cart item
  def destroy
    item = current_cart.cart_items.find(params[:id])
    item.destroy
    render json: current_cart
  end

  private

  def item_params
    params.permit(:id, :inventory_id)
  end

end
