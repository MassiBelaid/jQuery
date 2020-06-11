$(function(){
	
	//clicks Souris
	// Dimensions de la fenêtre
    var largeur = ($(window).width()) - 150;
    var hauteur = ($(window).height()) - 150;
	
	// Affichage de la première image en (100, 100)
    var p = $('#target').offset();
    p.top=250;
    p.left=250;
    $('#target').offset(p);
	
	$('#target').click(function(){
		x = Math.floor(Math.random()*largeur);
    	y = Math.floor(Math.random()*hauteur);
		var p = $('#target').offset();
		p.top=x;
    	p.left=y;
    	$('#target').offset(p);
	});
	
	$('#target').mousedown(function(e){
    	$('#rapport').html('Événement : ' + e.type + '. Bouton pressé : ' +  e.which );
    });
	
	$('div').scroll(function() {
      console.log('Utilisation de la roulette dans la balise <div>');
    });
    $(window).scroll(function() {
      console.log('Utilisation de la roulette dans le document');
    });
	
	
	//Click au clavie tArea
	$('#tArea').keydown(function(){
      $('#lumiere').css('background-color', 'green');
    });
    $('#tArea').keyup(function(){
        $('#lumiere').css('background-color', 'white');
    });
	 $('#tArea').keypress(function(e){
        console.log("Touche : "+e.which+" ( "+String.fromCharCode(e.which)+" )");
    });
});