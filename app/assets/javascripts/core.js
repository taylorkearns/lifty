/* ================================================== */
/* FUNCTIONS
/* ================================================== */
var core = (function(){
	return {
		// Calculate total weight by doubling the weight on each side and adding bar weight
		calculateTotalWeight: function(){
			$('#exercise_total_weight').val($('#exercise_weight_each_side').val() * 2 + parseInt($('#exercise_bar_weight').val()));
		},
		
		clearAllButTotalWeight: function(){
			$('#exercise_weight_each_side, #exercise_bar_weight').val('0');
		}
	};
})();

/* ================================================== */
/* DOCUMENT.READY
/* ================================================== */
$(document).ready(function(){
	// Plus and minus buttons
	$('.value_field button').bind('click', function(){
		var button = $(this);
		var input = button.prevAll('.value');
		var previous_value = parseInt(input.val());
		var new_value = button.is('.up') ? previous_value + 1 : previous_value - 1
		input.val(new_value);
		
		if(input.is('#exercise_weight_each_side') || input.is('#exercise_bar_weight')){
			core.calculateTotalWeight();
		} else if(input.is('#exercise_total_weight')){
			core.clearAllButTotalWeight();
		}
	});
	
	$('#exercise_weight_each_side, #exercise_bar_weight').bind('change', function(){
		core.calculateTotalWeight();
	});
	
	// Zero out the weight each side and bar weight when total weight is entered manually
	$('#exercise_total_weight').bind('change', function(){
		core.clearAllButTotalWeight();
	});
});