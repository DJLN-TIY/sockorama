Rails.application.routes.draw do

  scope :api do
    resources :inventories
    resources :products
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    resources :carts
    resources :users

    post '/login' => 'sessions#create'
    delete "/logout" => 'session#destroy'
  end

end
