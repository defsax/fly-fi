Rails.application.routes.draw do
  scope '/' do
    resources :users
    #resources :flights
  end
end
