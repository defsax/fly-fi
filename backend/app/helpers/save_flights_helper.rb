module SaveFlightsHelper
  include Math
  
  # FORMAT: from/to = { :lat => (latitude_in_degrees), :lng => (longitude_in_degrees) }
  def haversine_distance(from, to)
    earth_radius_mi = 3959
    radians = lambda { |deg| deg * PI / 180 }
    coord_radians = lambda { |c| { :lat => radians[c[:lat]], :lng => radians[c[:lng]] } }

    from, to = coord_radians[from], coord_radians[to]
    cosines_product = cos(to[:lat]) * cos(from[:lat]) * cos(from[:lng] - to[:lng])
    sines_product = sin(to[:lat]) * sin(from[:lat])
    return earth_radius_mi * acos(cosines_product + sines_product)
  end

  def get_eta(flight_num, arrival, plane_lat, plane_long, plane_speed)
    # url = "https://aviation-edge.com/v2/public/flights?key=#{ENV['AVIATION_API_KEY']}&flightIata=#{flight_num}"  
    # plane = HTTParty.get(url)

    from = { :lat => plane_lat, :lng => plane_long}
    
    arr_airport = Airport.find_by(codeIataAirport: arrival)
    to = { :lat => arr_airport[:latitudeAirport], :lng => arr_airport[:longitudeAirport]}
    
    # miles
    distance = haversine_distance(from, to)
    # convert speed to nautical miles
    speed = plane_speed / 1.852
    time = distance/speed

    return time
  end

  def get_flights
    flights = Flight.where(notification: true)
    puts flights
    return flights
  end


  def convert_to_minutes(time)
    hour = time.floor
    minutesdec = time - hour;
    min = 0.01666666
    temp = min * ((minutesdec / min).round)
    minutes = (temp * 60).floor
  
    if hour > 0
      hour = (hour * 60).round
    end  

    return hour + minutes
  end
end
