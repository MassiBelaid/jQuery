$(function(){
	
	//Insertion de contenu
	//$('h2').append(' ***');
	//$('h2').prepend(' ***');
	//$('h2').before(' ***');
	$('h2').after(' ***');
	$('br').replaceWith('<hr/>');
	
	//Remplacer les h2 avec des h3
	$('h2').each(function(){
		var elemH2 = $(this);
		elemH2.replaceWith('<h3 id="'+elemH2.attr('id')+'">'+elemH2.text()+'</h3>');
	});
	
	
	//Insertion d'éléments
	$('<li>Deuxième élément bis</li>').insertAfter($('li:nth-child(2)'));
	//ajout balise hr avant chaque titre h2
	$('<hr>').prependTo($('h2'));
	
	//ajout à la fin appendTo();
	//ajout au debut prependTo();
	//ajout avant insertBefore();
	//ajout après insertAfter();
	
	
	//deplacement
	//$('#deux').after($('#un'));
	
	
	$('ul').clone().insertBefore($('h3:first'));
	
	//entourer les li par des balises i:
	$('li').wrap('<i></i>');
	//ou bien wrapInner aqui insére les balise à l'intérieur
	//et wrapAll pour toute les balise de ce type seron contournées
	
	//.remore() permet de supprimer une selection






});