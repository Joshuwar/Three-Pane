jQuery(document).ready(function($) {


	// set the wrap to have a class of 'slidePos-x' where x is the id of the link clicked

	slideposition = function(slidepos) {
		$('#' + slidepos).click(function() {
			$(this).parents('.wrap')addClass('slidePos-' + slidepos);
		})
	};

	// get the id of the link clicked and send it to slideposition func

	$('a').click(function() {
		slideposition($(this).id());
	});
	

});