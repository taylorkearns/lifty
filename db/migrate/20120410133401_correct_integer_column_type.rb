class CorrectIntegerColumnType < ActiveRecord::Migration
	def change
		change_column(:exercises, :total_weight, :integer, :default => 0)
		change_column(:exercises, :reps, :integer, :default => 0)
	end
end
