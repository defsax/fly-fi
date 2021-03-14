Rails.application.routes.draw do
  scope '/' do
    resources :user, only: [:create, :index]
    resources :home
    resources :flight_search
  end

  #resources :users, only: [:create]

end
