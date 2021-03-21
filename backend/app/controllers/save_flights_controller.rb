class SaveFlightsController < ApplicationController
  
  include Math
  
  # from/to = { :lat => (latitude_in_degrees), :lng => (longitude_in_degrees) }
  def haversine_distance(from, to)
    earth_radius_mi = 3959
    radians = lambda { |deg| deg * PI / 180 }
    coord_radians = lambda { |c| { :lat => radians[c[:lat]], :lng => radians[c[:lng]] } }

    from, to = coord_radians[from], coord_radians[to]
    cosines_product = cos(to[:lat]) * cos(from[:lat]) * cos(from[:lng] - to[:lng])
    sines_product = sin(to[:lat]) * sin(from[:lat])
    return earth_radius_mi * acos(cosines_product + sines_product)
  end

  def create
    user = current_user

    # get arriving flight's eta first
    url = "https://aviation-edge.com/v2/public/timetable?key=#{ENV['AVIATION_API_KEY']}&iataCode=#{flight_param[:arrival]}&type=arrival"
    arriving_flight = HTTParty.get(url).select{|item| item["flight"]["iataNumber"] == flight_param[:flight_number]}

    puts "\n\nArriving flight estimated time"
    puts arriving_flight[0]["arrival"]["estimatedTime"]
    puts "\n\nArriving flight scheduled time"
    puts arriving_flight[0]["arrival"]["scheduledTime"]

    url = "https://aviation-edge.com/v2/public/flights?key=#{ENV['AVIATION_API_KEY']}&flightIata=#{flight_param[:flight_number]}"  
    plane = HTTParty.get(url)
    puts "\n\nPlane coords:"
    puts plane[0]["speed"]["horizontal"]
    puts plane[0]["geography"]["latitude"]
    puts plane[0]["geography"]["longitude"]
    from = { :lat => plane[0]["geography"]["latitude"], :lng => plane[0]["geography"]["longitude"]}
    
    puts "\n\Airport coords:"
    arr_city = City.find_by(codeIataCity: flight_param[:arrival])
    puts arr_city.latitudeCity
    puts arr_city.longitudeCity

    to = { :lat => arr_city.latitudeCity, :lng => arr_city.longitudeCity}
    
    # miles
    distance = haversine_distance(from, to)
    # convert to nautical miles
    speed = plane[0]["speed"]["horizontal"] / 1.852

    puts "\n\nDistance in miles"
    puts distance

    puts "\n\nSpeed in nautical miles"
    puts speed

    puts "\n\nTime remaining:"
    time = distance/speed
    puts time

    # arriving_flight = HTTParty.get(url).select{|item| item["flight"]["iataNumber"] == flight_param[:flight_number]}

    # puts "\n\n"
    # puts arriving_flight

    # # then get airport timezone
    # arr_city = City.find_by(codeIataCity: flight_param[:arrival])
    # puts "\n\n"
    # puts arr_city.timezone
    # puts "\n\nTime now"
    # puts Time.now
    # puts "\n\nTime zone"
    # puts Time.zone = arr_city.timezone
    # puts "\n\nTime now"
    # puts Time.zone.now

    
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
      flight = Flight.new(user_id: user[:id], flight_number: flight_param[:flight_number], eta: time, notification: true)
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
