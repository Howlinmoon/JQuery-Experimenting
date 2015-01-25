// Understanding Javascript's Functions
// Understanding Object Literals
// Having a Good understanding of HTML/CSS
// Look at and study other peoples JQuery

// function declaration
function foo(the_thing_passed_in) {
	console.log(the_thing_passed_in);
}

foo(5);

var x = 5;

foo(x);

// function Expression

var bar = function (bars_parameter) {
	console.log("bars_parameter = "+bars_parameter);
}

// passing a function to a function..

function foo2 (the_thing_passed_in) {
	the_thing_passed_in("foo2 passed this");
}

foo2(bar);

// Another function Declaration
function foo3 (the_thing_passed_in) {
	// assuming the thing passed in was a function, we execute it
	the_thing_passed_in();
}

foo3 (function() {
	console.log("Hi from anonymous!");
});
