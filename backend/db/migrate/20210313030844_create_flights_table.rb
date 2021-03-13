class CreateFlightsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :arrival_airport
      t.string :departure_airport

      t.timestamps null: false
    end
  end
end
