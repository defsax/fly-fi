class SaveFlightsController < ApplicationController
  
  def create
    user = current_user

    # if flight exists, just switch notification to true
    if Flight.exists?(flight_number: flight_param[:flight_number], user_id: user[:id])
      puts "flight exists already"
      temp = Flight.where(flight_number: flight_param[:flight_number], user_id: user[:id])
      # puts temp.notification
      temp.update(notification: true)
    else
      # otherwise create new flight
      flight = Flight.new(user_id: user[:id], flight_number: flight_param[:flight_number], eta: flight_param[:eta], notification: true)
      flight.save
    end


    flights = Flight.where(user_id: current_user[:id], notification: true)

    render :json => {flights: flights}
  end

  def delete
    user = current_user
    flight = Flight.find_by(id: flight_param[:flight_id])
    flight.notification = false
    flight.save

    flights = Flight.where(user_id: current_user[:id], notification: true)

    puts flights

    render :json => {flights: flights}
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
    params.require(:flight_info).permit(:user, :flight_id, :flight_number, :eta)
  end
end
