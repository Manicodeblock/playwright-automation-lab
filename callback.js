// Function that accepts a callback
function sayHello(callback) {
    console.log("Hello!");
    callback();  // Calling the callback function
}

// The callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

function saygreat(){
    console.log("Great!");
}

// Passing `sayGoodbye` as a callback to `sayHello`
sayHello(sayGoodbye);
sayHello(saygreat);


//output
//Hello!
//Goodbye!
