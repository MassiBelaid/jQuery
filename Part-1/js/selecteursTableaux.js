$(function(){
	//coloration premiere cellule 
	//$('td:first').css('background-color', 'green');
	
	//coloration derniere ligne 
	//$('tr:last').css('background-color', 'green');
	
	//coloration des cellules vides
	//$(':empty').css('background-color', 'green');
	
	//coloration des lignes paires
	//$('tr:even').css('background-color', 'green');
	
	//coloration des lignes paires
	//$('td:even').css('background-color', 'green');
	
	//coloration des lignes index sup a 2
	//$('tr:gt(1)').css('background-color', 'green');
	
	//Coloration de toutes les lignes à l'exception de la dernière
	$('tr:not(tr:last)').css('background-color', 'green');
});