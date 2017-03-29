class AddStockPhotoToProduct < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :stock_photo, :string
  end
end
