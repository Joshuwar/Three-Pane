jQuery(document).ready(function($) {
	$('a.paneControl').click(function() {
		$(this).parents('.wrap').attr('class', 'wrap slidePos-' + this.id);
	});
	$('a#notificationFlyout').click(function() {
		$(this).parents('.wrap').addClass('flyout');
	});
});