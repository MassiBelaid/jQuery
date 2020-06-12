$(function(){
	function traitement(){
		alert("image clickée");
	}
	
	$('#activer').on('click',function(){
		$('#image').click(traitement); // Meilleur 
		//$('#image').on('click',traitement); ou bien (action du click executée plusieurs fois)
	});
	
	$('#desactiver').on('click',function(){
		$('#image').off('click',traitement);
	});
	
	
	//s'execute que la premiere fois ou l'on cliqke sur l'image, se desactive aorès
	$('#img2').one('click', function() {
    	$('#message').text('Vous avez cliqué sur l\'image. Désormais, je resterai insensible aux clics.').fadeIn(1000).fadeOut(5000);
    });
});