$('.load-text').each(function(){
    var text = $(this).html().split(' '),
        len = text.length,
        result = []; 

    for( var i = 0; i < len; i++ ) {
        result[i] = '<span>' + text[i] + '</span>';
    }
    $(this).html(result.join(' '));
    $('span').each(function(i){
	    var t = $(this);
	    setTimeout(function(){ t.addClass('delay'); }, (i+1) * 50);
	});
});  