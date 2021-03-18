class SendTextController < ApplicationController
  def send
    
    # require 'rubygems'
    require 'twilio-ruby'

    # Your Account Sid and Auth Token from twilio.com/console
    # and set the environment variables. See http://twil.io/secure
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    twilio_default_number = ENV['TWILIO_DEFAULT_NUMBER']

    test_number_one = ENV['TEST_NUMBER_ONE']
    test_number_two = ENV['TEST_NUMBER_TWO']
    test_number_three = ENV['TEST_NUMBER_THREE']

    @client = Twilio::REST::Client.new(account_sid, auth_token)

    message = @client.messages.create(
      body: 'Hi from backend',
      from: "#{twilio_default_number}",
      to: "#{test_number_one}"
    )

    puts message.sid
  end
end
