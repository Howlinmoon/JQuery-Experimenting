function foo() {
	console.log('a');
}

// Duplicating a function name
function foo() {
	console.log('b');
}

// which one runs - the second of course - the second overwrites the first

foo();

//var jQuery = function () {
//	// does lots of stuff
//	console.log("fake jQuery");
//	return;
//}


// Example of jQuery function being overwritten via something called "prototype"
// and how to work around it.

// globally destory "$"
var $ = 'prototype';
//
//$(document).ready(function () {
//	
//	$('div.stuff').css('background-color', 'red');
//	
//});

// IIFE = Immediately invoking function expression

// it calls itself immediately - because of the trailing ()
// inside of the IIFE - you can preserve $ no matter the current environment

(function ($) {
//	"$" works OK in here
	$(document).ready(function () {
		
		$('div.stuff').css('background-color', 'red');
		
	});
	
})(jQuery);

// A simpler(!) way of doing the same thing:

jQuery(document).ready(function ($) {
	// $ is now jQuery in here
	$('span.stuff').css('background-color', 'blue');
	
});