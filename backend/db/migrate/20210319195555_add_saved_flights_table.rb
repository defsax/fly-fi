class AddSavedFlightsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_flights do |t|
      t.string :flight_number
      t.string :eta
      t.timestamps
      t.belongs_to :users
    end
  end
end
