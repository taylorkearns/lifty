class CreateExercises < ActiveRecord::Migration
	def change
		create_table :exercises do |t|
			t.string :name
			t.integer :weight_each_side, :default => 0
			t.integer :bar_weight, :default => 0
			t.integer :total_weight, :default => 0
			t.string :weight_units
			t.integer :reps, :default => 0
			
			t.timestamps
		end
	end
end
