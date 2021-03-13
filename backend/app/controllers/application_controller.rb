class ApplicationController < ActionController::API
  include HTTParty
  base_uri 'https://aviation-edge.com/v2/public/'

  def flight_post
    code = Flight.flight_number
    self.class.get('flights?key=e58eb2-cea570&flightIata = #{code}')
    #puts Flight.flight_post
  end  

end
