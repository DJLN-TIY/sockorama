class InventorySerializer < ActiveModel::Serializer
  attributes :id, :size, :quantity
  belongs_to :product
  has_many :cart_items
end
