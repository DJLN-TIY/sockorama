Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  scope :api do
    resources :inventories
    resources :products
    resources :carts
    resources :users
    resources :cart_items

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
