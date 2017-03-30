Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  scope :api do
    resources :inventories
    resources :products
    resources :carts
    resources :users
<<<<<<< HEAD
    resources :charges
=======
    resources :cart_items
>>>>>>> f81f56324996613da668a7ca687dee93566f1eff

    post '/login' => 'sessions#create'
    delete "/logout" => 'session#destroy'
    get '/checkout' => 'carts#start_checkout'
    post '/checkout' => 'carts#finalize_checkout'

    root 'products#index'
  end

end
