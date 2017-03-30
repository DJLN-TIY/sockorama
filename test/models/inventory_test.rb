require 'test_helper'

class InventoryTest < ActiveSupport::TestCase

  context "associations" do
    should belong_to :product
    should have_many :cart_items
  end
  
end
