//practise Task 11-12-2024
//variable
console.log(a); 
var a = 5;
console.log(a); 
//function injs hoisted 
greet();

function greet() {
  console.log("Hello, World!");
}
//let and const related in hoisting 
console.log(x); 
let x = 10;

console.log(y); 
const y = 20;
//function expresssion in hoisting 
sayHello();

var sayHello = function () {
  console.log("Hello!");
};

//class level
const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    console.log("Class instantiated");
  }
}





