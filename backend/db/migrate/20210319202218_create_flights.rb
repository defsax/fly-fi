class CreateFlights < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.integer :user_id
      t.string :flight_number
      t.string :eta
      t.timestamps
    end
  end
end