class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null:false
      t.integer :todo_id, null:false
      t.timestamps
    end

    add_index :tag_id, :todo_id
  end
end
