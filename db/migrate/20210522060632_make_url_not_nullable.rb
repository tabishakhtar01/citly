class MakeUrlNotNullable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :shortners, :url, false
  end
end
