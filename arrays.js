// Declare an array
const fruits = ["Apple", "Banana", "Cherry"];

//also insert another type data types in array javascript will accept 


// Use a for loop to iterate over the array
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit at index ${i}: ${fruits[i]}");
}

// Original array
const array = ['a', 'b', 'c', 'e', 'i', 'x', 'o', 'u', 'z'];

// Array to hold vowels
const vowels = [];
const vowelSet = ['a', 'e', 'i', 'o', 'u']; // Vowel reference

// Iterate through the array and push vowels into the new array
array.forEach((element) => {
  if (vowelSet.includes(element)) {
    vowels.push(element);
  }
});

console.log("Original array:", array);
console.log("Vowels found:", vowels);
