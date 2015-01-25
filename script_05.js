// #4 demonstrated how to preserve jQuery in the event something overwrote "$"
// This will demonstrate how to preserve something else, when jQuery loads after it

// This preserves a pre-existing declaration of the "$"
$.noConflict();

// Prototype uses $ here

jQuery(document).ready(function ($) {
	// $ is now jQuery in here
	$('span.stuff').css('background-color', 'blue');
	
});

//Prototype uses $ here
