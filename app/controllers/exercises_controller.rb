class ExercisesController < ApplicationController
	def index
		@exercises = Exercise.all
	end
	
	def new
		@exercise = Exercise.new
	end
	
	def create
		@exercise = Exercise.new(params[:exercise])
		if @exercise.save
			@exercise.name = params['exercise']['name']
			@exercise.weight_each_side = params['exercise']['weight_each_side'].to_i
			@exercise.bar_weight = params['exercise']['bar_weight'].to_i
			@exercise.weight_units = params['exercise']['weight_units']
			@exercise.reps = params['exercise']['reps'].to_i
			redirect_to exercise_path(@exercise)
		else
			flash[:notice] = "Unable to create exercise. Please make sure all fields are filled in."
			render 'new'
		end
	end
	
	def show
		@exercise = Exercise.find(params[:id])
	end
	
	def update
		@exercise = Exercise.find(params[:id])
		@exercise.name = params['exercise']['name']
		@exercise.weight_each_side = params['exercise']['weight_each_side'].to_i
		@exercise.bar_weight = params['exercise']['bar_weight'].to_i
		@exercise.total_weight = params['exercise']['total_weight'].to_i
		@exercise.weight_units = params['exercise']['weight_units']
		@exercise.reps = params['exercise']['reps'].to_i
		@exercise.save
		render 'show'
	end
	
	def destroy
		@exercise = Exercise.find(params[:id])
		@exercise.delete
		flash[:notice] = "Exercise '#{ @exercise.name }' deleted"
		redirect_to exercises_path
	end
end
