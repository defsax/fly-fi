Rails.application.routes.draw do
  scope '/' do
    resources :user, only: [:index, :create]
    resources :home, only: [:index]
    # resources :flight
  end

  post '/search' => 'search#search'

  #resources :users, only: [:create]

end
