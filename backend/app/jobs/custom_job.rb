require 'twilio-ruby'

CustomJob = Struct.new(:flight_id, :msg, :phone_number)

class CustomJob
  def queue_name
    "#{flight_id}"
  end
  
  def perform
    puts "Text for flight id: #{flight_id}"
  
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    twilio_default_number = ENV['TWILIO_DEFAULT_NUMBER']
  
    @client = Twilio::REST::Client.new(account_sid, auth_token)
    message = @client.messages.create(
      body: "#{msg}",
      from: "#{twilio_default_number}",
      to: "#{phone_number}"
    )

    # remove from tracked flights once flight has ended
    flight = Flight.find_by(id: flight_id)
    flight.update(notification: false)
  end
end