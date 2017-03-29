class CartSerializer < ActiveModel::Serializer
  attributes :id, :total, :state
  has_many :cart_items
  class CartItemSerializer < ActiveModel::Serializer
    attributes :id, :quantity
    has_one :inventory
  end
end
