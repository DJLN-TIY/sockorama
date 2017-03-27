Rails.application.routes.draw do
  resources :carts
  resources :users

  post '/login' => 'sessions#create'
  delete "/logout" => 'session#destroy'

end
