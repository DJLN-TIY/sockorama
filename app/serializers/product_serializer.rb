class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :sock_type, :color, :style, :price, :stock_photo, :description, :materials
  has_many :inventories
end
