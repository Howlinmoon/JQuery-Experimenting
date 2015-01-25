$(document).ready(function ($) {

	// console.log($('.stuff'));
	// display the first element of the div.stuff object

	console.log("whole ball of wax - stuff wise");
	console.log($('div.stuff'));
	console.log('separator 1');
	console.log($('div.stuff')[0]);
	console.log('separator 2');
	console.log($('.stuff')[0]);
	console.log('separator 3');
	console.log($('.stuff')[1]);
	
	// This is bad
//	$('.stuff').style.display = 'none';
	// ".style.display = 'none'" requires a javascript object to work on
	// "$('.stuff')" is not returning a javascript object
	
	// This is OK
	$('.stuff')[0].style.display = 'none';
	// "$('.stuff')[0]"  IS returning a javascript object which ".style.display = 'none'"  can work on
	// this code suppressed the display of "This is my div" - since that is element[0] of the .stuff array
	
	

	
});

function foo() {
	return['test', 'abc'];
}

// Traditional way of accessing the first element of the array returned by foo
// first assign it to a var - 'x'
var x = foo();
// and then, retrieve the contents by indexing 'x'
console.log('x[0] = '+x[0]);

// Javascript allows a shortcut - bypassing the need for the intermediate 'x' var
console.log(foo()[0]);

