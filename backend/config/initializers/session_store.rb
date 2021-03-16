if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_fly-fi', domain: 'http://localhost:3002'
else
  Rails.application.config.session_store :cookie_store, key: '_fly-fi'
end