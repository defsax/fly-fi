Rails.application.routes.draw do
  scope '/' do

    resources :home, only: [:index]
    # resources :flight
  end

  # login/logout routes
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  get '/logged_in' => 'sessions#is_logged_in?'

  # create a user or show all users
  resources :user, only: [:index, :show, :create]
  
  # search route
  post '/search' => 'search#search'
  
  # send test sms route
  post '/queue_text' => 'send_text#queue_text'

  # save a user's flight in corresponding table
  post '/save_flight' => 'save_flights#create'
  post '/delete_flight' => 'save_flights#delete'
  
  get '/check_flights' => 'save_flights#show'
end
