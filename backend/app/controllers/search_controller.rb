class SearchController < ApplicationController
  def search 
    puts flight_param
    # change query based on given params
    if flight_param[:flight_number].length != 0
      url = "https://aviation-edge.com/v2/public/flights?key=#{ENV['AVIATION_API_KEY']}&flightIata=#{flight_param[:flight_number]}"      
    elsif flight_param[:dep_airport].length != 0 && flight_param[:arr_airport].length != 0
      url = "https://aviation-edge.com/v2/public/flights?key=#{ENV['AVIATION_API_KEY']}&depIata=#{flight_param[:dep_airport]}&arrIata=#{flight_param[:arr_airport]}"
    else
      url = "https://aviatsion-edge.com/v2/public/flights?key=#{ENV['AVIATION_API_KEY']}&lat=#{flight_param[:lat]}&lng=#{flight_param[:lng]}&distance=#{flight_param[:distance]}&limit=1000"
    end

    puts "before request"

    response = {}

    begin
        #... process, may raise an exception
      response = HTTParty.get(url)

    rescue Errno::EHOSTUNREACH => e
      puts "Ali's error"
      puts "threw an exception, fallback onto database"
      puts e

      # backup data saved
      # response = BackupFlights = BackupFlight.all

      # response.body = BackupFlight.all
      response = {
        error: {
          status: 500,
          errors: ['ERROR: can\'t reach api.']
        }
      }

    rescue SocketError => e
      #... error handler
      puts "threw an exception, fallback onto database"
      puts e

      # backup data saved
      # response.body = BackupFlights.all

      response = {
        error: {
          status: 500,
          errors: ['ERROR: socket error.']
        }
      }

    else
      #... executes when no error
      puts "set data here"
      
    ensure
      #... always executed
      puts "return either api data or db data"
      render json: response
    end


    # puts "response.code" 
    # puts response.code 

    # if response.code != 500
    #   puts "\n\n"
    #   puts "inside if block"
    #   puts response

    #   puts "\n\n"
  

    # else
    #   puts "response 500"
    # end


  end
  private
  def flight_param
    params.require(:flight).permit(:flight_number, :dep_airport, :arr_airport, :distance, :lng, :lat)
  end
end