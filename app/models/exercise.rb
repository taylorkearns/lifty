class Exercise < ActiveRecord::Base
	validates :name, :presence => true
	validates :weight_each_side, :presence => true
	validates :bar_weight, :presence => true
	validates :total_weight, :presence => true
	validates :weight_units, :presence => true
	validates :reps, :presence => true
end
