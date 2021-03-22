class AddAirportModelInDbDeleteCities < ActiveRecord::Migration[6.1]
  def change
    drop_table :cities

    create_table :airports do |t|
      t.string :GMT
      t.integer :airportId
      t.string :codeIataAirport
      t.string :codeIataCity
      t.string :codeIcaoAirport
      t.string :codeIso2Country
      t.string :geonameId
      t.float :latitudeAirport
      t.float :longitudeAirport
      t.string :nameAirport
      t.string :nameCountry
      t.string :phone
      t.string :timezone
    end
  end
end
