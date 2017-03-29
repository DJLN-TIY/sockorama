class InventoriesController < ApplicationController
  # before_action :admin

  def index
    if params[:q]
      @q = Inventory.ransack(params[:q])
      render json: @q.result
    else
      @inventories = Inventory.all
      render json: @inventories
    end
  end

  def create
    product = Product.find(params[:id])
    inv = product.inventories.new(inventory_params)
    if inv.save
      render json: inv
    else
      render json: inv.errors.full_messages, status: 400
    end
  end

  def update
    inv = Inventory.find(params[:id])
    inv.update(inventory_params)
    if inv.save
      render json: inv
    else
      render json: inv.errors.full_messages, status: 400
    end
  end

  private

  def inventory_params
    params.permit(:size, :quantity)
  end

end
