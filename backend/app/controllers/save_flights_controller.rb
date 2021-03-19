class SaveFlightsController < ApplicationController
  
  def create
    user = current_user

    puts current_user[:name]
    # puts "\n\nuser:" + user[:name]
    puts "\n\nflight_number:" + flight_param[:flight_number]
    puts flight_param[:eta]
    

    @flight = Flight.new(user_id: user[:id], flight_number: flight_param[:flight_number], eta: flight_param[:eta], notification: true)

    @flight.save

    render json: {content: @flight[:id]}
  end

  def delete
    user = current_user
    flight = Flight.find_by(id: flight_param[:flight_id])

    flight.notification = false

    puts flight

    # flight.destroy
    head :no_content, status: :ok
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
