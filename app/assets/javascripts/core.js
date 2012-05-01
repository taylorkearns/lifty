/* ================================================== */
/* FUNCTIONS
/* ================================================== */
var core = (function(){
	return {
		// Calculate total weight by doubling the weight on each side and adding bar weight
		calculateTotalWeight: function(){
			$('#exercise_total_weight').val($('#exercise_weight_each_side').val() * 2 + parseInt($('#exercise_bar_weight').val()));
		},
		
		// Zero out the weight each side and bar weight when total weight is entered manually
		clearAllButTotalWeight: function(){
			$('#exercise_weight_each_side, #exercise_bar_weight').val('0');
		}
	};
})();

/* ================================================== */
/* DOCUMENT.READY
/* ================================================== */
$(document).ready(function(){
	// Use JS to navigate to new pages instead of default link behavior
	// Used for iOS standalone mode
	$('a[href!="#"]').bind('click', function(e){
		e.preventDefault();
		href = $(this).attr('href');
		location.href = href;
	});
	
	$('.show_exercise .value_field input, .new_exercise .value_field input').focus(function(){
		if($(this).val() === '0'){ $(this).val(''); }
	});

	$('.show_exercise .value_field input, .new_exercise .value_field input').blur(function(){
		if($(this).val() === ''){ $(this).val('0'); }
	});

	/* ========== VIEW ALL EXERCISES ========== */
	$.each($('ul.exercises > li > a'), function(i, elem){
		$(elem).text(core.capFirst($(elem).text()));
	});

	/* ========== VIEW/EDIT EXERCISE ========== */
	// Plus and minus buttons
	$('.value_field button').bind('click', function(){
		var button = $(this);
		var input = button.prevAll('.value');
		var previous_value = parseInt(input.val());
		var increment = button.is('.one') ? 1 : 5;
		var new_value = button.is('.up') ? previous_value + increment : previous_value - increment;
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
	
	$('#exercise_total_weight').bind('change', function(){
		core.clearAllButTotalWeight();
	});
	
	/* ========== NEW EXERCISE ========== */
	$('#exercise_name').bind('focus', function(){
		if($(this).val() === '[New Exercise]'){
			$(this).val('');	
		}
	});
	$('#exercise_name').bind('blur', function(){
		if($(this).val() === ''){
			$(this).val('[New Exercise]');	
		}
	});
});