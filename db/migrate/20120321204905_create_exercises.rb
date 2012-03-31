class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :weight_each_side
      t.integer :bar_weight
      t.integer :total_weight
      t.string :weight_units
      t.string :type_of_weight
      t.string :reps

      t.timestamps
    end
  end
end
