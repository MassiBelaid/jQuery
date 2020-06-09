$(function(){
	//selectionne le boutton H
	$(':radio').val(['H']);
	if($(':radio#H:checked').val())
		console.log("H checked");
	else
		console.log("H not checked");
	
	$('#nom').val("Massi");
	console.log($('#nom').val());
	
	$('#fonction').val('retraite')
	console.log($('#fonction').val());
});