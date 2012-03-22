class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name
      t.float :weight_each_side
      t.float :bar_weight
      t.float :total_weight
      t.string :weight_units
      t.string :type_of_weight
      t.string :reps

      t.timestamps
    end
  end
end
