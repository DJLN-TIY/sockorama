GET '/api/products'
Returns JSON list of all products:
  :id, :name, :sock_type, :color, :style, :price, :stock_photo, :description, :materials, :stock_photo
    - inventories
      :id, :size, :quantity

GET '/api/products/:id'
Returns JSON of a particular product:
  :id, :name, :sock_type, :color, :style, :price, :stock_photo, :description, :materials, :stock_photo
    - inventories
      :id, :size, :quantity

GET '/api/users'
Returns JSON list of all users:
  :id

GET '/api/users/:id'
Returns JSON of a particular user:
  :id

GET '/api/inventories'
Returns JSON list of all inventories:
  :id, :size, :quantity
    - product
      :id, :name, :sock_type, :color, :style, :price, :stock_photo, :description, :materials, :stock_photo

GET '/api/carts/:id'
REQUIRES :cart_token
Returns JSON of a particular cart:
  :id, :total, :state,
    - :cart_items
      :id, :quantity, :inventory
        - :size, :quantity

GET '/api/checkout'
Begins the checkout process
REQUIRES :cart_token
Returns JSON of the cart:
  :total

POST '/api/checkout'
Finishes the checkout process, charges the customer through Stripe, adjusts stock quantities
REQUIRES :cart_token, :stripeToken
Returns status: 200
