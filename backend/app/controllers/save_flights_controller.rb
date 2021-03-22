class SaveFlightsController < ApplicationController
  def create
    user = current_user

    # get flight's eta using helper
    eta = helpers.get_eta(flight_param[:flight_number], flight_param[:arrival], flight_param[:latitude], flight_param[:longitude], flight_param[:speed])

    # if flight exists, just switch notification to true
    if Flight.exists?(flight_number: flight_param[:flight_number], user_id: user[:id])
      puts "flight exists already"
      @flight = Flight.where(flight_number: flight_param[:flight_number], user_id: user[:id])[0]
      @flight.update(notification: true)
    else
      # otherwise create new flight
      @flight = Flight.new(user_id: user[:id], flight_number: flight_param[:flight_number], eta: eta, notification: true, arrival_airport: flight_param[:arrival], departure_airport: flight_param[:departure])
      @flight.save
    end

    # start notification procedure
    # notification will come half hour before

    puts "eta: total hours..."
    puts eta

    if eta > 0.5
      # if eta is greater than a half hour
      eta = eta - 0.5

      # convert eta to minutes
      minutes = helpers.convert_to_minutes(eta)
      puts "eta: minutes until text message:"
      puts minutes  

      enqueue_new_text = CustomJob.new(@flight.id, flight_param[:message], user[:phone])
      get_job = Delayed::Job.find_by(queue: enqueue_new_text.queue_name)
    
      if get_job
        puts "Notification already registered..."
      else
        puts "Queuing notification..."
        custom_job = Delayed::Job.enqueue(enqueue_new_text,
          queue: enqueue_new_text.queue_name,
          run_at: minutes.minutes.from_now
        )
      end
    else
      # if eta is less than a half hour send now
      minutes = helpers.convert_to_minutes(eta)
      msg = "#{current_user[:name]}, your flight #{flight_param[:flight_number]} from #{flight_param[:departure]} to #{flight_param[:arrival]} is about to land in approximately #{minutes} minutes!"
      SendSmsJob.perform_now(current_user[:phone], msg)
    end
    puts "eta:"
    puts eta

    # return updated flight list
    flights = Flight.where(user_id: current_user[:id], notification: true)
    render json: {
      flights: flights
    }
  end

  def delete
    user = current_user
    flight = Flight.find_by(id: flight_param[:flight_id])
    flight.notification = false
    flight.save

    # cancel notification procedure
    unqueue_old_text = CustomJob.new(flight.id)
    get_job = Delayed::Job.find_by(queue: unqueue_old_text.queue_name)
  
    if get_job
      puts "Canceling notification..."
      get_job.destroy
    end

    # get update flights list to return
    flights = Flight.where(user_id: current_user[:id], notification: true)

    render json: {
      flights: flights
    }
  end

  def show 
    @flight = Flight.order("created_at DESC")

    if @flight.length != 0
      render json: { 
        flight: @flight
      }
    else
      render json: {
        status: 500,
        errors: ['No flights.']
      }
    end
  end

  private
  def flight_param
    params.require(:flight_info).permit(:flight_id, :flight_number, :arrival, :departure, :message, :latitude, :longitude, :speed)
  end
end
