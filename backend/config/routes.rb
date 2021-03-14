Rails.application.routes.draw do
  scope '/' do
    resources :users
    resources :home
    resources :flight_search
  end
end
