require 'test_helper'

class InventoriesControllerTest < ActionDispatch::IntegrationTest

  test 'inventories#create' do
    product = Product.create!(
      name: "test_sock",
    )
    post inventories_path,
      params: {
        id: product.id,
        size: "M",
        quantity: "12"
      }
    assert response.ok?
    assert_equal 1, product.inventories.count
    json = JSON.parse(response.body)
    assert_equal "M", json["size"]
  end

  test 'inventories#update' do
    product = Product.create!
    inventory = Inventory.create!(
      product_id: product.id,
      size: "XL",
      quantity: "20"
    )
    assert_equal 1, Inventory.all.count
    patch inventory_path(inventory),
      params: {
        size: "XL",
        quantity: "16"
      }
    assert response.ok?
    assert_equal 1, Inventory.all.count
    json = JSON.parse(response.body)
    assert_equal 16, json["quantity"]
  end

end
