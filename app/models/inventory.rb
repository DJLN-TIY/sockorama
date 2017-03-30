class Inventory < ApplicationRecord
  include PgSearch
  belongs_to :product

  has_many :cart_items

end
