$(document).ready(function () {
	
	$('.rasak').popover({
	html:true,
	content: function(){
		return $(this).parent().find('.content').html();
	},
	container: '.rasak',
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
	$('.extra_popover').popover({
		placement: 'bottom',
		html:'true',
		content: '<button class="yashu">dnjh</button>',
		title:'',
		
	});
	$(function(){
		$.fn.editable.defaults.mode = 'inline';
		$(document).on("click", ".yashu", function(e) {
			e.stopPropagation();
			$('.list_header_title').editable('toggle');
			$('.list_header_title').parent().parent().addClass('panda');
		});
		$(document).on('click', '.editable-cancel, .editable-submit', function(){
			
		})
	});
	
	
});