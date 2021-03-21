class AddCityTable < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.string :GMT
      t.integer :cityId
      t.string :codeIataCity
      t.string :codeIso2Country
      t.integer :geonameId
      t.float :latitudeCity
      t.float :longitudeCity
      t.string :nameCity
      t.string :timezone
    end
  end
end
