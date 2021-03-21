class AddNotificationColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :flights, :notification, :boolean
  end
end
