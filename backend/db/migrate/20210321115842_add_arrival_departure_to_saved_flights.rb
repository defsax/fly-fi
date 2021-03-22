class AddArrivalDepartureToSavedFlights < ActiveRecord::Migration[6.1]
  def change
    add_column :flights, :arrival_airport, :string
    add_column :flights, :departure_airport, :string
  end
end
