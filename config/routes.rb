Rails.application.routes.draw do
  root to: 'static_pages#piano'

  get '/janko', :to => 'static_pages#janko'

end
