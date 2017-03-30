require 'test_helper'

class ProductTest < ActiveSupport::TestCase

  context "associations" do
    should have_many :inventories
  end
  
end
