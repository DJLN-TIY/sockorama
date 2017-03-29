class InventoriesController < ApplicationController
  # before_action :admin

  def index
    @inventories = Inventory.all
    render json: @inventories
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
    product = Product.find(params[:id])
    inv = product.inventories.find_by(size: params[:size])
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
