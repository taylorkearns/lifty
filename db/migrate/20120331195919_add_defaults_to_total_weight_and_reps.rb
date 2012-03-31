class AddDefaultsToTotalWeightAndReps < ActiveRecord::Migration
	def change
		change_column(:exercises, :total_weight, :int, :default => 0)
		change_column(:exercises, :reps, :int, :default => 0)
	end
end
