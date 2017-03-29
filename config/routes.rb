Rails.application.routes.draw do

  resources :cart_items
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope :api do
    resources :inventories
    resources :products
    resources :carts
    resources :users
    resources :charges

    post '/login' => 'sessions#create'
    delete "/logout" => 'session#destroy'

    root 'products#index'
  end

end
