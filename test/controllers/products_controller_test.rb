require 'test_helper'

class ProductsControllerTest < ActionDispatch::IntegrationTest

  test 'products#create' do
    products = Product.all.count
    post products_path,
      params: {
        name: "test_sock"
      }
    assert response.ok?
    total = Product.all.count
    assert_equal (products + 1), total
    json = JSON.parse(response.body)
    assert_equal "test_sock", json["name"]
  end

  test 'products#update' do
    post products_path,
      params: {
        name: "test_sock",
        style: "ankle",
        price: "999"
      }
    assert_equal 1, Product.all.count
    patch product_path(Product.first),
      params: {
        name: "new_test_name",
        price: "111"
      }
    assert response.ok?
    assert_equal 1, Product.all.count
    json = JSON.parse(response.body)
    assert_equal "new_test_name", json["name"]
    assert_equal "ankle", json["style"]
  end

end
