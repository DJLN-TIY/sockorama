class Product < ApplicationRecord
  has_many :inventories, dependent: :destroy

  mount_uploader :stock_photo, StockPhotoUploader
end
