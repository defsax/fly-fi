Rails.application.routes.draw do
  scope '/' do

    resources :home, only: [:index]
    # resources :flight
  end

  # login/logout routes
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions@destroy'
  get '/logged_in' => 'sessions#is_logged_in?'

  # create a user or show all users
  resources :user, only: [:index, :show, :create]
  
  # search route
  post '/search' => 'search#search'
  
  # send test sms route
  get '/send' => 'send_text#send'
end
