class User < ApplicationRecord
  has_secure_password
  has_secure_token

  has_one :cart, dependant: :destroy

  validates :email, :name, :password, presence: true

end
