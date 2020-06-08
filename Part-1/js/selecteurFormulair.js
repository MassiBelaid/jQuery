$(function(){
	//Coloration de tous les champs de saisie
	//$(':input').css('background','yellow');
	
	//Coloration d'un champ de saisie particulier
	//$(':password').css('background','yellow');
	
	//Redimensionnement d'un champ de type image
	$(':image').css('width','450px');
	$(':image').css('height','350px');
	
	//Focus au premier champ de saisie et coloration en jaune
	document.forms[0].nom.focus(); //donne le focus au premier champs de saisie
	//document.forms[0].commentaires.focus(); //donne le focus au premier champs de saisie avec le name commentaires
	$(':focus').css('background','yellow');
});