class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.references :member, null: false, foreign_key: true
      t.datetime :datetime, null: false
      t.references :duty, null: false, foreign_key: true

      t.timestamps
    end
  end
end
