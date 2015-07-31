$(document).ready(function() {
	$.get('/katieleach.github.io/templates/navbar.html', function(data) {
		$('#page_wrap').prepend(data);
	});
	$.get('/katieleach.github.io/templates/footer.html', function(data) {
		$('#page_wrap').append(data);
	});
});
