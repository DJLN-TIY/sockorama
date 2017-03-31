Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  scope :api do
    resources :inventories
    resources :products
    resources :carts
    resources :users
<<<<<<< HEAD
<<<<<<< HEAD
    resources :charges
=======
    resources :cart_items
>>>>>>> f81f56324996613da668a7ca687dee93566f1eff
=======
    resources :charges
    resources :cart_items

<<<<<<< HEAD
>>>>>>> ea7f6913d705a588e0a8b080706ce429eb00e589

=======
>>>>>>> 42020c42acd13e9d9d34f035399cd5139907283a
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
