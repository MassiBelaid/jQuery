$(function(){
	/*$('img').click(function() {
      $('#message').text('L\'image a été cliquée.').fadeIn(1000).fadeOut(1000);
    });
    $('button').click(function() {
      $('img').trigger('click');
    }); */
	
	$('img').click(function(event,texte) {
      if (texte == undefined)
        texte = "par vous";
      $('#message').text('L\'image a été cliquée ' + texte).fadeIn(1000).fadeOut(1000);
    });
    $('#button').click(function() {
      $('img').trigger('click', 'par jQuery');
    });
	
	
	//creéation de notre événement "boujour-query"
	$('#bonjour').on('bonjour_jquery', function() {
  		alert('jQuery vous dit bonjour !');
	});
	//Lancement de cet événement au début
	$('#bonjour').trigger('bonjour_jquery');


	
	
});