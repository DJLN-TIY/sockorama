class AddTokenToCart < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :cart_token, :string
  end
end
