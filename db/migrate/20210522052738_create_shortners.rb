class CreateShortners < ActiveRecord::Migration[6.1]
  def change
    create_table :shortners do |t|
      t.text :url
      t.timestamps
    end
  end
end
