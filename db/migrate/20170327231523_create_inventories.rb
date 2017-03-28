class CreateInventories < ActiveRecord::Migration[5.0]
  def change
    create_table :inventories do |t|
      t.references :product, foreign_key: true
      t.string :size
      t.integer :quantity

      t.timestamps
    end
  end
end
