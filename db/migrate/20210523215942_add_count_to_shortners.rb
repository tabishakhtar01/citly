class AddCountToShortners < ActiveRecord::Migration[6.1]
  def change
    add_column :shortners, :count, :integer, default: 0, null: false
  end
end
