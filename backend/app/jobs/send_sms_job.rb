require 'twilio-ruby'

class SendSmsJob < ApplicationJob
  queue_as :default

  def perform(msg)

    # loop while user has ANY tracked flights
    while Flight.where(notification: true).exists?

      puts "starting job..."

      # for each flight in db with notification...
      # @flights = ApplicationController.helpers.get_flights
      puts Flight.where(notification: true)

      Flight.where(notification: true).each do |flight|
        user = User.find(flight[:user_id])
        puts user[:name]
        receiver = user[:name]
        number = user[:phone]

        # update eta...
        eta = ApplicationController.helpers.get_eta(flight[:flight_number], flight[:arrival_airport])
        puts eta

        # check eta. if eta is < than 0.5, send text
        if eta < 0.5
          puts "receiver:"+ receiver
          puts "number:"+ number
          text = receiver + ", flight #" + flight[:flight_number].to_s + " is arriving at " + flight[:arrival_airport].to_s + " in " + eta.to_s + " hours!"
          puts "text:" + text
          puts "SENDING TEXT...\n"
          
          account_sid = ENV['TWILIO_ACCOUNT_SID']
          auth_token = ENV['TWILIO_AUTH_TOKEN']
          twilio_default_number = ENV['TWILIO_DEFAULT_NUMBER']
          
          @client = Twilio::REST::Client.new(account_sid, auth_token)
          message = @client.messages.create(
            body: text,
            from: "#{twilio_default_number}",
            to: "#{number}"
          )

          # once text is sent, update notification column to false
          flight.update(notification: false)

        else
          text = receiver + ", flight #" + flight[:flight_number].to_s + " is arriving at " + flight[:arrival_airport].to_s + " in " + eta.to_s + " hours!"
          puts "text:" + msg
          puts "SENDING TEXT...\n"
          
          account_sid = ENV['TWILIO_ACCOUNT_SID']
          auth_token = ENV['TWILIO_AUTH_TOKEN']
          twilio_default_number = ENV['TWILIO_DEFAULT_NUMBER']
          
          @client = Twilio::REST::Client.new(account_sid, auth_token)
          message = @client.messages.create(
            body: text,
            from: "#{twilio_default_number}",
            to: "#{number}"
          )
        end
        sleep 1
      end
      sleep 60
    end

    Delayed::Job.destroy_all
  end
end