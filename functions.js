//anonymous function
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000);

//function declaration 
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Manikandan")); 


//IIFE function example 
var counter = (function() {
	var count = 0;

	return {
		increment: function() {
			count++;
		},
		decrement: function() {
			count--;
		},
		getCount: function() {
			return count;
		}
	};
})();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // Output: 3

// Trying to access the private count variable directly
console.log(counter.count); // Output: undefined (cannot access private variable)


//IIFE example two 
var result = (function() {
	var x = 10;
	var y = 20;
	return x + y;
})();

console.log(result); // Output: 30


//Arrow funnction and exmaple 
// Traditional function expression for comparison arrow function 
const add = function(a, b) {
    return a + b;
};

// Arrow function (shorter and cleaner)
const add = (a, b) => a + b;
