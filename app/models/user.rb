class User < ApplicationRecord

  has_secure_password
  has_secure_token

  has_many :carts, dependent: :destroy

  validates :email, :name, :password, presence: true

end
