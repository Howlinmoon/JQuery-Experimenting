// jQuery();
// is the same as
// $();

// Example of a simple JQuery statement

//var when_the_dom_is_ready = function() {
//	$('div.stuff').css('background-color', 'red');
//}

// JQuery 
// $('finds stuff').doStuffToIt().doMoreStuff().AndMore

// Doing it the silly way
//$(document).ready(when_the_dom_is_ready);

// The correct way

$(document).ready(function() {
	
	$('div.stuff').css('background-color', 'red');
	
});

