class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product
    else
      render json: @product.errors.full_messages, status: 400
    end
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def update
    @product = Product.find(:id)
    @product.update(product_params)
    if @product.save
      render json: @product
    else
      render json: @product.errors.full_messages, status: 400
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :sock_type, :color, :style, :price, :image, :materials, :description, :stock_photo)
  end

end
