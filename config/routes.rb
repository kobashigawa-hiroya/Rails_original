Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get "records/index"
  get "records/create"
  devise_for :users

  root "homes#index"
  resources :members
  resources :homes
  resources :records
  resources :counters
  resources :duties
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
