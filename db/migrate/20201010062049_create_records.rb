class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.references :member, null: false, foreign_key: true
      t.references :counter, null: false, foreign_key: true
      t.references :duty, null: false, foreign_key: true

      t.timestamps
    end
  end
end
