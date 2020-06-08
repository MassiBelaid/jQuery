$(function(){
	$('img').each(function(index){
		this.src = '../images2/i'+(index+1)+'.jpg';
	});
	
	var imagesElementDOM = $('img').get();
	for(i=0; i<imagesElementDOM.length; i++){
		console.log(imagesElementDOM[i]);
	}
});