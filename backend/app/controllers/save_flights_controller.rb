class SaveFlightsController < ApplicationController
  def create
    user = current_user

    # get flight's eta using helper
    eta = helpers.get_eta(flight_param[:flight_number], flight_param[:arrival])

    # if flight exists, just switch notification to true
    if Flight.exists?(flight_number: flight_param[:flight_number], user_id: user[:id])
      puts "flight exists already"
      @flight = Flight.where(flight_number: flight_param[:flight_number], user_id: user[:id])
      @flight.update(notification: true)
      # flight.check_to_notify(user[:id])
    else
      # otherwise create new flight
      @flight = Flight.new(user_id: user[:id], flight_number: flight_param[:flight_number], eta: eta, notification: true, arrival_airport: flight_param[:arrival], departure_airport: flight_param[:departure])
      @flight.save

      puts @flight
      # @flight.check_to_notify(user[:id])
    end

    # start notification procedure
    # there should now be at least one flight requiring a notification
    # check delayed_jobs table. 
      # if there's already a job, skip making a new one.
      # otherwise, call sendsmsjob with (message and user[:id])
    
    if Delayed::Job.all.exists?
      puts "job is already running"
      puts Delayed::Job.all.exists?
    else 
      eta = eta - 0.5
      hours = eta.round
      # convert eta to hours and minutes
  
      

      SendSmsJob.perform_later(flight_param[:message])
      SendSmsJob.set(wait: 1.hours ).perform_later(flight_param[:message])
      puts Delayed::Job.all.exists?
    end


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

    #cancel notification procedure

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
    params.require(:flight_info).permit(:flight_id, :flight_number, :arrival, :departure, :message)
  end
end
