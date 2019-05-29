$(document).ready(function() {
	$('.header-main-humMenu').click(function(e) {
		/* Act on the event */
		e.preventDefault();
		$('body').toggleClass('clickMenu');
	});
});		