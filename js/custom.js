$(document).ready(function () {
	
	$('.yash').popover({
	html:true,
	content: function(){
		return $(this).parent().find('.content').html();
	},
	container: '.yash',
	placement: 'bottom'
	});
	
	$(function(){
   		var height = 0;
		$('.action_blocks h2').each(function(){
			height = Math.max( height, $(this).outerHeight() )
		});
		$('.action_blocks h2').outerHeight(height);
		$('.action_blocks p').each(function(){
			height = Math.max( height, $(this).outerHeight() )
		});
		$('.action_blocks p').outerHeight(height);
	});
});