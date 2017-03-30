class Cart < ApplicationRecord
  include AASM

  has_secure_token :cart_token

  belongs_to :user, optional: true
  has_many :cart_items

  aasm column: :state do
    state :open, initial: true
    state :completed
    event :checkout do
      transitions from: :open, to: :completed
    end
  end
  # Call cart.checkout to toggle cart status from open to complete. Call cart.checkout! to save the cart to the database.

  def calculate_total
    cart_items.map { |i| (i.quantity * i.inventory.product.price) }.reduce(:+)
  end

  def adjust_quantity
    cart_items.each do |i|
      if i.inventory.quantity > i.quantity
        (i.inventory.quantity -= i.quantity)
      else
        return false
      end
    end
    # self.save
    save
  end

end
