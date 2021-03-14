class FlightSearchController < ApplicationController
  def index
    puts ENV['AVIATION_API_KEY'].class
    response = HTTParty.get('https://aviation-edge.com/v2/public/flights?key=e58eb2-cea570&flightIata=DL1311')

    puts response.body
    #response.code, response.message, response.headers.inspect
    render json: response.body
  end
end
