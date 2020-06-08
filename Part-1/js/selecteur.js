$(function(){
	console.log("Nombre de balises ul : "+$('ul').length);
	console.log("Nombre de balises ul de class bleu : "+$('ul.bleu').length);
	console.log("Nombre de ul contenues dans div : "+$('div ul').length);
	console.log("Nombre li de class pair contenues dans ul qui eux contenues dans un div : "+$('div ul li[class="pair"]').length);
	console.log("Nombre de li possédant l'attribut class : "+$('li[class]').length);
	console.log("Nombre de li de class impair : "+$('li[class="impair"]').length);
	console.log("Nombre de toutes las balise du document : "+$('*').length);
	console.log($('*')[0]);
	$('.rouge').css('background','red').css('color','yellow');
	console.log("===============================================================");
	console.log($('a[href]')[0]);
});