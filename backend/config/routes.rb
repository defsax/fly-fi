Rails.application.routes.draw do
  scope '/' do

    resources :home, only: [:index]
    # resources :flight
  end
  
  resources :user, only: [:index, :create]

  post '/search' => 'search#search'
  get '/send' => 'send_text#send'

  #resources :users, only: [:create]

end
