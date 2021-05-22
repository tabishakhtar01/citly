Rails.application.routes.draw do
  resources :shortners, only: [:index, :create]
  get 'shortners/:code', to: 'shortners#show'
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
