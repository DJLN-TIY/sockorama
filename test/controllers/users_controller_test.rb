require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest

  test 'users#create' do
    users = User.all.count
    post users_path,
      params: {
        name: "test",
        password: "password",
        email: "test@example.com"
      }
    assert response.ok?
    json = JSON.parse(response.body)
    assert_equal "test@example.com", json["email"]
    total = User.all.count
    assert_equal (users + 1), total
  end

end
