class InventorySerializer < ActiveModel::Serializer
  attributes :id, :size, :quantity
  has_one :product
end
