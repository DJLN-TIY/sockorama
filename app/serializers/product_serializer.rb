class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :sock_type, :color, :style, :price, :image, :description, :materials
  has_many :inventories
end
