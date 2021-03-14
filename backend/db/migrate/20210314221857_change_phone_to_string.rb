class ChangePhoneToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :phone, :string
  end
end
