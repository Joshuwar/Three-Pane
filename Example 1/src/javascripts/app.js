jQuery(document).ready(function($) {
	$('a').click(function() {
		$(this).parents('.wrap').attr('class', 'wrap slidePos-' + this.id);
	});
});