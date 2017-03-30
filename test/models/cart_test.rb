require 'test_helper'

class CartTest < ActiveSupport::TestCase

  context "associations" do
    should belong_to :user
    should have_many :cart_items
  end

end
