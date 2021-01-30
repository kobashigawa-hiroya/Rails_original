class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.string :name
      t.boolean :display, default: true

      t.timestamps
    end
  end
end
