class SaveFlightsController < ApplicationController
  
  def create
    user = current_user

    # get arriving flight's eta first
    url = "https://aviation-edge.com/v2/public/timetable?key=#{ENV['AVIATION_API_KEY']}&iataCode=#{flight_param[:arrival]}&type=arrival"
        
    arriving_flight = HTTParty.get(url).select{|item| item["flight"]["iataNumber"] == flight_param[:flight_number]}

    puts "\n\n"
    puts arriving_flight

    # then get airport timezone
    timezone = City.find_by(codeIataCity: flight_param[:arrival])
    puts timezone
    
    # url = "https://aviation-edge.com/v2/public/cityDatabase?key=#{ENV['AVIATION_API_KEY']}&codeIataCity=#{info[0]["arrival"]["iataCode"]}"
    # city_data = HTTParty.get(url)
    
    
    # puts "\n\n"
    # puts city_data[0]["timezone"]

    # url = "http://worldtimeapi.org/api/timezone/#{city_data[0]["timezone"]}"
    # local_time = HTTParty.get(url)
    # puts "\n\n"
    # puts local_time["datetime"]


    # puts "\n\n"
    # puts info[0]["arrival"]["scheduledTime"]
    # puts info[0]["departure"]["delay"]
    # puts "\n\n"


    # if flight exists, just switch notification to true
    if Flight.exists?(flight_number: flight_param[:flight_number], user_id: user[:id])
      puts "flight exists already"
      temp = Flight.where(flight_number: flight_param[:flight_number], user_id: user[:id])
      # puts temp.notification
      temp.update(notification: true)
    else
      # otherwise create new flight
      flight = Flight.new(user_id: user[:id], flight_number: flight_param[:flight_number], eta: 1, notification: true)
      flight.save

      puts flight
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
    params.require(:flight_info).permit(:user, :flight_id, :flight_number, :arrival)
  end
end
