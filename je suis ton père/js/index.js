$(function(){
	setInterval(function(){ 
		console.log($('#index').css('font-size'));
		var oldVal = $('#index').css('font-size');
		$('#index').css('font-size',parseInt(oldVal.substring(0,oldVal.length-2),10)+1+'px');
		console.log($('#index').css('font-size'));
	}, 750);
	
	
	
	
});