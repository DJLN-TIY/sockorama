Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  scope :api do
    resources :inventories
    resources :products
    resources :carts
    resources :users
    resources :charges
    resources :cart_items
    resources :charges
    resources :cart_items
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> ea7f6913d705a588e0a8b080706ce429eb00e589

=======
>>>>>>> 42020c42acd13e9d9d34f035399cd5139907283a
=======
    
>>>>>>> e0b61137875b63bb117a7f07fc272e907e9760e3
    post '/login' => 'sessions#create'
    delete "/logout" => 'session#destroy'
    get '/checkout' => 'carts#start_checkout'
    post '/checkout' => 'carts#finalize_checkout'

    root 'products#index'
  end
  # Fallback route
  # get '/:fjlkd(/:fjdklad)' => 'application#static'

end

# root 'application/static'
