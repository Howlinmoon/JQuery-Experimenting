$(window).load(function()  {
	console.log('c');
});

$(document).ready(function()  {
	console.log('a');
});

$(document).ready(function()  {
	console.log('b');
});

$(document).load(function()  {
	console.log('c');
});

// .load is executed AFTER .ready
// most people will use .ready

// There is a short hand for .ready

$(function() {
	console.log("Hello from the shorthand version");
});