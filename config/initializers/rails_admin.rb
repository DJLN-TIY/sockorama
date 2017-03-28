RailsAdmin.config do |config|

  config.authorize_with do
    authenticate_or_request_with_http_basic('Site Message') do |username, password|
      User.find_by(username: username).try(:authenticate, password).try(:admin?)
    end
  end


  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar true

  config.model 'User' do
    object_label_method :username
    list do
      exclude_fields :password_digest, :token
    end
    edit do
      exclude_fields :password_digest, :token
    end
    show do
      exclude_fields :password_digest, :token
    end
  end

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
