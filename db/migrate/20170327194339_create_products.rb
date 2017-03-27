class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :color
      t.string :style
      t.integer :price
      t.string :image
      t.string :materials
      t.text :description
      t.string :type

      t.timestamps
    end
  end
end
