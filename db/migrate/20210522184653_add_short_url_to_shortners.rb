class AddShortUrlToShortners < ActiveRecord::Migration[6.1]
  def change
    add_column :shortners, :short_url, :text
  end
end
