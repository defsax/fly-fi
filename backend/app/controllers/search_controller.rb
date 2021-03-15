class SearchController < ApplicationController
  def search 
    # change query based on given params
    if flight_param[:flight_number].length != 0
      url = "https://aviation-edge.com/v2/public/flights?key=#{ENV['AVIATION_API_KEY']}&flightIata=#{flight_param[:flight_number]}"
    else
      url = "https://aviation-edge.com/v2/public/flights?key=#{ENV['AVIATION_API_KEY']}&depIata=#{flight_param[:dep_airport]}&arrIata=#{flight_param[:arr_airport]}"
    end

    response = HTTParty.get(url)
    render json: response.body
  end

  private

  def flight_param
    params.require(:flight).permit(:flight_number, :dep_airport, :arr_airport)
  end
end
