$(document).ready(function () {
	
	$('.yash').popover({
	html:true,
	content: function(){
		return $(this).parent().find('.content').html();
	},
	container: '.yash',
	placement: 'bottom'
	});
});