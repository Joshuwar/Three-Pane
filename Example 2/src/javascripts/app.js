jQuery(document).ready(function($) {
	$('a.paneControl').click(function() {
		$(this).parents('.wrap').attr('class', 'wrap slidePos-' + this.id);
		mySwipe.slide($(this).parent().index(), 600);
		//alert($(this).index());

	});
	$('a.overlayLink, a.overlayClose').click(function() {
		$(this).parents('.wrap').toggleClass( "overlayShown" );
	});
	$('a.hideNav').click(function() {
		$(this).parents('.contextualNavContainer').toggleClass( "closed" );
		/*
		This func changes the text of the contextual nav, but that has been superceded by css rotation
		if($(this).parents('.contextualNavContainer').hasClass("closed")) {
			$(this).html("&#9658;");
		} else {
			$(this).html("&#9668;");
		}*/
	});
	$('.iconLink a').click(function() {

		var $wrap = $(this).parents('.wrap');
		$(this).closest('.iconLink').siblings().children('a').each(function() {
			$wrap.removeClass(this.id);
		});

		$wrap.toggleClass(this.id);
		
	});

	window.mySwipe = new Swipe(document.getElementById('slider'), {
      continuous: false,
		callback: function(index, elem) {
//			alert($(elem).data('navid'));
			$('.wrap').attr('class', 'wrap slidePos-' + $(elem).data('navid'));
		},
	});
});