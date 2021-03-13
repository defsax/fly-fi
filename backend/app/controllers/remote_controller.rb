class RemoteController < ApplicationController
  
  def index
  end

  # include HTTParty
  # base_uri 'https://aviation-edge.com/v2/public/'

  def flight_post
    code = Flight.flight_number
    flight_info = HTTParty.get('https://aviation-edge.com/v2/public/flights?key=e58eb2-cea570&flightIata = #{code}')
  end


end