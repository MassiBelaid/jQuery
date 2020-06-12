$(function(){
	$('#master').on('click', 'div', function(){
    $(this).after('<div>Ce &lt;div&gt; a les mêmes caractéristiques que son parent</div>');
  });
	
	$('#suppr').click(function(){
		$('#master').off('click','div');
	});
});