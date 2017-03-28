class Cart < ApplicationRecord
  include AASM

  belongs_to :user
  has_many :cart_items

  aasm column: :state do
    state :open, initial: true
    state :complete
  end

  event :checkout do
    transitions from: :open, to: :complete
  end

  # call cart.checkout to toggle cart status from open to complete. call cart.checkout! to save the cart to the database.

end
