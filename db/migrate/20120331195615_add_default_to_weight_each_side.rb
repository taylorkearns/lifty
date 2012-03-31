class AddDefaultToWeightEachSide < ActiveRecord::Migration
	def change
		change_column(:exercises, :weight_each_side, :integer, :default => 0)
	end
end
