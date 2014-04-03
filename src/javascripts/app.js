jQuery(document).ready(function($) {
	$('.handleBar').click(function() {
		console.log("boo");
		$(this).parents('.wrap').addClass('slidePos-000');
	});
});