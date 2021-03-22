require 'twilio-ruby'

class SendSmsJob < ApplicationJob
  queue_as :default

  def perform(uid, arrival_airport, msg)

    user = User.find(uid)
    receiver = user.name
    number = user.phone

    # loop while user has ANY tracked flights
    while Flight.where(user_id: uid, notification: true).exists?

      puts "starting job..."
      sleep 10

      # for each flight in db with notification...
      Flight.where(user_id: uid, notification: true).each do |flight|

        # update eta...
        eta = ApplicationController.helpers.get_eta(flight[:flight_number], arrival_airport)
        puts eta

        # check eta. if eta is < than 0.5, send text

        puts "sending text..."
        puts "receiver:"+ receiver
        puts "number:"+ number
        text = receiver + ", " + msg + " loop #"
        puts "text:" + msg
        puts "SENDING TEXT...\n"
        
        account_sid = ENV['TWILIO_ACCOUNT_SID']
        auth_token = ENV['TWILIO_AUTH_TOKEN']
        twilio_default_number = ENV['TWILIO_DEFAULT_NUMBER']
        
        # @client = Twilio::REST::Client.new(account_sid, auth_token)
        # message = @client.messages.create(
        #   body: text,
        #   from: "#{twilio_default_number}",
        #   to: "#{number}"
        # )

        # once text is sent, update notification column to false
        flight.update(notification: false)
      end
    end
  end
end