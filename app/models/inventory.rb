class Inventory < ApplicationRecord
  belongs_to :product

  has_many :cart_items

end
