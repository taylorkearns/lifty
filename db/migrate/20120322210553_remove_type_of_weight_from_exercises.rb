class RemoveTypeOfWeightFromExercises < ActiveRecord::Migration
	def up
		remove_column :exercises, :type_of_weight
	end
	
	def down
		add_column :exercises, :type_of_weight, :string
	end
end
