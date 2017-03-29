class AddStateToCart < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :state, :string
  end
end
