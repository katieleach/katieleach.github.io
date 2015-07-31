$(document).ready(function() {
	$.get('/katieleach/templates/navbar.html', function(data) {
		$('#page_wrap').prepend(data);
	});
});
