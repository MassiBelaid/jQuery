$(function(){
	var test = $('a').attr('href');
    	console.log(test);
	
	$('a').attr('target',function(){
		if(this.host == location.host) return '_self'
		else return '_blank'
	});
	
	
	
	
	$('#julia').addClass('rouge');
	$('#julia').addClass('vert grand');
	//Supprimer avant la classe verte sinon conflit entre les deux classes ====> echec !
	$('#eric').removeClass('vert').addClass('rouge');
	$('#paul').removeClass('grand').addClass('petit').removeClass('vert').addClass('rouge');
	//ou bien
	//$('#paul').toggleClass('grand').toggleClass('petit').toggleClass('vert').toggleClass('rouge');
	//ou bien
	//$('#paul').removeClass('grand vert').addClass('petit rouge')
	
	if($('#kevin').hasClass('rouge')){
	 console.log('Kévin est écrit en rouge');  
	}else{
		console.log("Kévin n'est pas écrit en rouge");
	}
	
	if ($('#jean').is('.grand.rouge'))
		console.log('le span #jean est de classe grand et rouge');
	else
  		console.log('le span #jean n\'est pas de classe grand et/ou rouge');
	
	
	console.log($('h1').text());
	var aLast = $('a:last').text();
	console.log(aLast);
	
	/* Parcours de tout les text des éléments séléctionnés
	$('a').text(function(index,actuel) {
  	alert('Paragraphe ' + (index+1) + ' : '+actuel);*/
	
	
	//affichage contenu html de l'élément avce l'id : listes.
	console.log(($('#listes').html()));
});
	
