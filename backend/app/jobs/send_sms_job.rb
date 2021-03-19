require 'twilio-ruby'

class SendSmsJob < ApplicationJob
  queue_as :default

  def perform(receiver, number, message)
    # Do something later
    # like send an SMS?
    # needs just phone number, eta, and basic flight info    
    puts "receiver:"+ receiver
    puts "number:"+ number
    message = receiver + ", " + message
    puts "text:" + message 
    puts "SENDING TEXT...\n"
    
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    twilio_default_number = ENV['TWILIO_DEFAULT_NUMBER']
    
    @client = Twilio::REST::Client.new(account_sid, auth_token)
    message = @client.messages.create(
      body: message,
      from: "#{twilio_default_number}",
      to: "#{number}"
    )
  end
end