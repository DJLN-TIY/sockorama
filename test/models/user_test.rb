require 'test_helper'

class UserTest < ActiveSupport::TestCase

  should have_secure_password

  context "associations" do
    should have_many :carts
  end

  context "validations" do
    should validate_presence_of :email
    should validate_presence_of :password
    should validate_presence_of :name
  end

end
