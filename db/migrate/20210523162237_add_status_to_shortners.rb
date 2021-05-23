class AddStatusToShortners < ActiveRecord::Migration[6.1]
  def change
    add_column :shortners, :status, :boolean, default: false
  end
end
