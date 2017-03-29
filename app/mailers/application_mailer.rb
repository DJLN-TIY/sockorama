class ApplicationMailer < ActionMailer::Base
  default from: 'clienteastwood@sockoramatiy.com'
  layout 'mailer'

  def welcome_email(user)
    @user = user
    @url  = 'HEROKU_URL_WILL_GO_HERE'
    mail(to: @user.email, subject: 'Welcome to My Sock-O-Rama!')
  end
end
