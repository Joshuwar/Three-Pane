jQuery(document).ready(function($) {

	// controls which pane is visible
	$('a.paneControl').click(function() {
		$(this).parents('.wrap').attr('class', 'wrap slidePos-' + this.id);
		mySwipe.slide($(this).parent().index(), 600);
		//alert($(this).index());
	});

	// toggles tool overlay
	$('a.overlayLink, a.overlayClose').click(function() {
		$(this).parents('.wrap').toggleClass( "overlayShown" );
	});

	// toggles  resultBlock display 
	$('a.viewMore').click(function() {
		$(this).parents('.resultBlock').toggleClass( "open" );
		//$(this).text("View Less");
	});

	// opens/closes interface cards
	$('a.expand, a.collapse').click(function() {
		$(this).parents('.card').toggleClass( "closed" );
	});

	// show/hide contextual nav ribbon
	$('a.hideNav').click(function() {
		$(this).parents('.contextualNavContainer').toggleClass( "closed" );
	});

	// show/hide top-right flyout menus
	$('.iconLink a').click(function() {
		var $wrap = $(this).parents('.wrap');
		$(this).closest('.iconLink').siblings().children('a').each(function() {
			$wrap.removeClass(this.id);
		});
		$wrap.toggleClass(this.id);
	});

	// initialise swipe.js controls
	window.mySwipe = new Swipe(document.getElementById('slider'), {
      continuous: false,
		callback: function(index, elem) {
			// alert($(elem).data('navid'));
			$('.wrap').attr('class', 'wrap slidePos-' + $(elem).data('navid'));
		},
	});
});