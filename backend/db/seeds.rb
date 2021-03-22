# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Mike", email: "mike@mike.com", password: "Ackison", phone: ENV['TEST_NUMBER_ONE'])
User.create(name: "Perry", email: "perry@perry.com", password: "Defayette", phone: ENV['TEST_NUMBER_TWO'])
User.create(name: "Ali", email: "ali@ali.com", password: "Bas", phone: ENV['TEST_NUMBER_THREE'])

airports = JSON.parse(File.read(Rails.root + "db/data/airportDatabase.json"))
airports.each do |record|
  Airport.create!(record)
end