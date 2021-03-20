class Flight < ApplicationRecord
  belongs_to :user

  validates :flight_number, uniqueness: { scope: [:user_id] }

end
