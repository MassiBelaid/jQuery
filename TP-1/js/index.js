$(function(){
	
	
	$('.reponse').hide();
	var divConteneurQuestion = $('.question');
	var couleurBase = divConteneurQuestion.css('background-color');
	divConteneurQuestion.css('width', '900px');         
	divConteneurQuestion.css('height', '225px');       
	divConteneurQuestion.css('margin', '5px'); 
	divConteneurQuestion.css('padding', '5px'); 
	$('input[type="radio"]').prop('checked', false);
	
	$('img').css('position','relative');
	$('img').css('bottom','150px');
	$('img').css('left','650px');
	
	$('a').hover(function(){
		$('.reponse').show();
		
		divConteneurQuestion.css('background-color','#7093f5');
		divConteneurQuestion.css('border','thick solid #000');
		
		var valRep1 = $('input[id="r1"]:checked').val();
		var valRep2 = $('input[id="r4"]:checked').val();
		var valRep3 = $('input[id="r8"]:checked').val();
		
		console.log(valRep1+"    "+valRep2+"     "+valRep3);
		
		if(valRep1){
		   $('#img1').prop("src","../images/correcte.png");
			$('#reponse1').css('color','#13e80d');
		 }else{
		   $('#img1').prop("src","../images/incorrecte.png");
			 $('#reponse1').css('color','#fa0808');
		 }
		
		if(valRep2){
		   $('#img2').prop("src","../images/correcte.png");
			$('#reponse2').css('color','#13e80d');
		 }else{
		   $('#img2').prop("src","../images/incorrecte.png");
			 $('#reponse2').css('color','#fa0808');
		 }
		
		if(valRep3){
		   $('#img3').prop("src","../images/correcte.png");
			$('#reponse3').css('color','#13e80d');
		 }else{
		   $('#img3').prop("src","../images/incorrecte.png");
			 $('#reponse3').css('color','#fa0808');
		 }
		
		
	}, function(){
		$('.reponse').hide();
		divConteneurQuestion.css('background-color',couleurBase);
		divConteneurQuestion.css('border','');
		
		$('#img1').prop("src","../images/question.png");
		$('#img2').prop("src","../images/question.png");
		$('#img3').prop("src","../images/question.png");
	});
});