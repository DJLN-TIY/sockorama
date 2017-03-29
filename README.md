GET '/api/products'
Returns JSON list of all products:
  :id, :name, :sock_type, :color, :style, :price, :image, :description, :materials, :stock_photo
    - inventories
      :id, :size, :quantity

GET '/api/products/:id'
Returns JSON of a particular product:
  :id, :name, :sock_type, :color, :style, :price, :image, :description, :materials, :stock_photo
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
      :id, :name, :sock_type, :color, :style, :price, :image, :description, :materials, :stock_photo
