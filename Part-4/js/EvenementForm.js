$(function(){
	$('.f').focus(function(){
		$('#resultat').text($(this).attr('id'));
	});
	$('.f').blur(function(){
		$('#resultat2').text($(this).attr('id'));
	});
	
	
	$('fieldset').focusin(function() {
      $('#result').text($(this).attr('id'));
    });
    $('fieldset').focusout(function() {
      $('#result2').text($(this).attr('id'));
    });
});