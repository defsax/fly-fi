Rails.application.routes.draw do
  scope '/' do
    resources :user, only: [:index, :create]
    resources :home, only: [:index]
    # resources :flight
  end

  # get '/search' => 'flight#search'
  post '/search' => 'flight#search'

  #resources :users, only: [:create]

end
