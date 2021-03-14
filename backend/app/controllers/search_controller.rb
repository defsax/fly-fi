class SearchController < ApplicationController
  # def index
  #   puts flight_param
  # end

  def search
    puts params.inspect
    puts "flight#: #{flight_param[:flight_number].length}"
    puts "dep airport: #{flight_param[:dep_airport].length}"
    puts "arr airport: #{flight_param[:arr_airport].length}"
    #puts ENV['AVIATION_API_KEY'].class

    if flight_param[:flight_number].length != 0
      puts "flight # not empty"
      response = HTTParty.get("https://aviation-edge.com/v2/public/flights?key=e58eb2-cea570&flightIata=#{flight_param[:flight_number]}")
    else
      puts "flight # empty"

      response = HTTParty.get("https://aviation-edge.com/v2/public/flights?key=e58eb2-cea570&depIata=#{flight_param[:dep_airport]}&arrIata=#{flight_param[:arr_airport]}")
      puts response.body
    end


    render json: response.body
  end

  private

  def flight_param
    params.require(:flight).permit(:flight_number, :dep_airport, :arr_airport)
  end
end
