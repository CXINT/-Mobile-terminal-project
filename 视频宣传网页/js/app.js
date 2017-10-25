(function($, root){
	$('li.dropdown').hover(function() {
		$(this).addClass('open');
	}, function() {
		$(this).removeClass('open')
	});

    $.material.init();
})(jQuery, window);