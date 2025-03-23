$(document).ready(function() {
	$('.hamburger').click(function(event) {
		$('.hamburger, .sidebar').toggleClass('active');
		$('body').toggleClass('lock');
	});
});