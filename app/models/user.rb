class User < ApplicationRecord

  has_secure_password
  has_secure_token

  has_many :carts, dependent: :destroy
  # has many orders, status: completed, class_name Cart

  validates :email, :name, :password, presence: true

end
