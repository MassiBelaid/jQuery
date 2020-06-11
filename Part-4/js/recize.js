$(function(){
	console.log('Le DOM à été entirement chargé');
	
	$(window).resize(function(){
		var taille = 'Taille de la fenêtre : ' + $(window).width() + 'px x ' + $(window).height() + 'px';
    	$('#resultat').text(taille);
	});
	
	$('select').change(function(){
		$('#result').text('Vous venez de sélectionner "' + $(this).val() +'".');
	});
	
	
	
	$(window).load(function() {
        console.log('La page est entièrement chargée');
    });
    $(window).unload(function() {
        console.log('Vous avez demandé à changer de page');
    });
});