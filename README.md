GET '/api/products/:id'
Returns JSON of a particular product:
  :id, :name, :sock_type, :color, :style, :price, :stock_photo, :description, :materials, :stock_photo
    - inventories
      :id, :size, :quantity

GET '/api/users/:id'
Returns JSON of a particular user:
  :id

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
  :total (in a hash)

POST '/api/checkout'
Finishes the checkout process, charges the customer through Stripe, adjusts stock quantities
REQUIRES :cart_token, :stripeToken
Returns status: 200
