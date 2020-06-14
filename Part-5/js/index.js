$(function(){
	$('#desactiver').fadeOut();
	
	$('#activer').on("click", function(){
		$('#activer').fadeOut(1000,'swing');
		$('#desactiver').fadeIn(1000, 'swing');
	});
	
	$('#desactiver').on("click", function(){
		$('#desactiver').fadeOut(1000, 'linear');
		$('#activer').fadeIn(1000, 'linear');
	});
	
	
	
	
	$('tr:even').css('background','yellow');
    $('td').css('width','200px');
    $('td').css('text-align','center');
	
	
	$('#affiche').click(function(){
		$('tr:even').show('slow');
	});
	
	$('#cache').click(function(){
		$('tr:even').hide(1500);
	});
	
	
	
	$('#afficheImg').click(function(){
		$('img').first().show('slow',function showNext(){
			$(this).next('img').show('slow', showNext);				   
		});
	});
	
	
	$('#cacheImg').click(function(){
		$('img').first().hide('slow',function hideNext(){
			$(this).next('img').hide('slow', hideNext);				   
		});
	});
});