// Object Literals

var data = { 
		name: 'Jim',
		school: 'CSU',
		callback: function(x) {
			alert(x);
		},
		location: 'Barberton'
}

// extracting the name member of the object
console.log(data.name);

// now, we exercise the function we have inserted as a member named 'callback'

// data.callback("This was displayed via the callback member");

// named parameters
function foo(a,b,c,d) {
	console.log(c);
}

// should display a 6
foo (4,5,6,7);


function foo2(params) {
	console.log(params.location);
	// exercise the function we were passed
	params.callback("something");
}

// call our new function, but pass it our object literal
foo2({
	name: 'Jim',
	school: 'CSU',
	callback: function(x) {
		alert(x);
	},
	location: 'Barberton'
});