class AddDefaultToBarWeight < ActiveRecord::Migration
	def change
		change_column(:exercises, :bar_weight, :integer, :default => 0)
	end
end
