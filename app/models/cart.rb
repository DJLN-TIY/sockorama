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

end
