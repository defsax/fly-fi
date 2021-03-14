Rails.application.routes.draw do
  scope '/' do
    resources :users
    resources :home
    #resources :flights
  end

  #resources :users, only: [:create]

end
