Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :organizations do 
    resources :projects, only: [:index, :create]
  end

  resources :donations, only: [:create]
  resources :user_organizations, only: [:index]
  resources :projects, only: [:index, :show, :create]
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
