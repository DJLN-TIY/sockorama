require 'test_helper'

class CartItemTest < ActiveSupport::TestCase

  context "associations" do
    should belong_to :cart
    should belong_to :inventory
  end
  
end
