class ChargesController < ApplicationController

  def new
  end

def create
  # Amount in cents
  @amount = params[:product][:price]

  customer = Stripe::Customer.create(
    :email => params[:user][:email],
    :source  => params[:stripeToken]
  )

  charge = Stripe::Charge.create(
    :customer    => customer.id,
    :amount      => @amount,
    :description => params[:product][:description],
    :currency    => 'usd'
  )

rescue Stripe::CardError => e
  flash[:error] = e.message
  redirect_to new_charge_path
end
end
