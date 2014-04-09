jQuery(document).ready(function($) {
	$('a.paneControl').click(function() {
		$(this).parents('.wrap').attr('class', 'wrap slidePos-' + this.id);
		mySwipe.slide($(this).parent().index(), 600);
		//alert($(this).index());

	});
	$('a#notificationFlyout').click(function() {
		$(this).parents('.wrap').addClass('flyout');
	});
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	  continuous: false,
		callback: function(index, elem) { 
//			alert($(elem).data('navid'));
			$('.wrap').attr('class', 'wrap slidePos-' + $(elem).data('navid'));
		},
	});
});