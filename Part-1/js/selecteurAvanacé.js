$(function(){
	//Image dont l'attributbordercontient partiellement ou totalement la valeur « 1 ». (canard)
	//$('[border*="1"]').css('border-color','red');
	
	//Image dont l'attributtitlecontient le mot « animal » délimité par un espace. (canard, chat, chien)
	//$('[title~="animal"]').css('border-color','red');
	
	//Image dont l'attributsrcse termine par « e.jpg ». (girafe)
	//$('[src$="e.jpg"]').css('border-color','red');
	
	//Image qui ne possède pas un attributborderégal à « 15 ». (tous)
	//$('[border!="15"]').css('border-color','red');
	
	//Image dont l'attributsrccommence par « ch ». (chat, cheval, chien)
	$('[src^="../images/ch"]').css('border-color','red');
	
	
	
	
	
	
	
	//Éléments ul directement descendants d'éléments li (enfant1, enfant2)
	//$('li > ul').css('color','red');
	
	//Éléments li directement précédés d'un élément li (enfant2, edl2, edl3, edl4)
	//$('li + li').css('color','red');
	
	//Premier élément li enfant (edl1, enfant1, enfant2)
	//$('li:first-child').css('color','red');
	
	//Premier élément li (edl1, enfant1, enfant2)
	//$('li:first').css('color','red');
	
	//Dernier élément li (edl4)
	//$('li:last').css('color','red');
	
	//Dernier élément li enfant (enfant2, edl4)
	//$('li:last-child').css('color','red');
	
	//élément li enfant unique de leur parent(aucun)
	//$('li:only-child').css('color','red');
	
	//Deuxième enfant li (enfant2, edl2)
	$('li:nth-child(2)').css('color','red');
	
	
	
	
	
	
	
	//p impaires (1, 3, 5)
    //$('p:even').css('color','red');
	
	//p pairs (2, 4)
	//$('p:odd').css('color','red');
	
	//p après le 2e (3, 4, 5)
	//$('p:gt(1)').css('color','red');
	
	//A l'index 4 (4)
	//$('p:eq(3)').css('color','red');
	
	//Avant le 4e (1,2,3)
	$('p:lt(3)').css('color','red');
	
	
	
	
	$('#divhidden').hide(); // pourcacher l'élément avec l'id : divhidden
	
	//selectionner tous les titres
	$(':header').css('color','red');
	
	//Affichage des éléments chachés
	$('div:hidden').show();
	
	//Dissimulation de tous les titres sauf le titre<h1>
	$(':header:not(h1)').hide();
	
	
	
});