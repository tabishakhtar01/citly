Rails.application.routes.draw do
  resources :shortners, only: %i[index create update], param: :code
  get 'shortners/:code', to: 'shortners#show'
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
