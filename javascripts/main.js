$(document).ready(function() {
	$.get('/templates/navbar.html', function(data) {
		$('#page_wrap').prepend(data);
	});
	$.get('/templates/footer.html', function(data) {
		$('#page_wrap').append(data);
	});
});
