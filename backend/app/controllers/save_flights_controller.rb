class SaveFlightsController < ApplicationController
  def create
    user = User.find_by_name(flight_param[:user])
    puts "\n\nuser:" + user[:name]
    puts "\n\nflight_param:" + flight_param[:flight_number]
    puts flight_param[:eta]
    @flight = Flight.new(flight_param)

    render json: {content: flight_param}
  end

  private
  def flight_param
    params.require(:flight_info).permit(:user, :flight_number, :eta)
  end
end
