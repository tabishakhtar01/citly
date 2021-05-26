class AddCodeToShortners < ActiveRecord::Migration[6.1]
  def change
    add_column :shortners, :code, :string, null: false
  end
end