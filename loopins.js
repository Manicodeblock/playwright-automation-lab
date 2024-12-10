// For Loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}

// While Loop
console.log("\nWhile Loop:");
let count = 1;
while (count <= 5) {
  console.log(`Iteration ${count}`);
  count++;
}

// Do-While Loop
console.log("\nDo-While Loop:");
let num = 1;
do {
  console.log(`Iteration ${num}`);
  num++;
} while (num <= 5);


//switfh case example 
// Switch case to handle days of the week
const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number!");
}
