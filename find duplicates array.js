
//Task 11-12-2024
// Sample array
var array = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape', 'apple'];

// Object to store counts of elements
var counts = {};

// Iterate through the array to count occurrences
array.forEach(function (item) {
  if (counts[item]) {
    counts[item]++;
  } else {
    counts[item] = 1;
  }
});

// Find duplicates and their counts
var duplicates = {};
for (var key in counts) {
  if (counts[key] > 1) {
    duplicates[key] = counts[key];
  }
}

// Print duplicates and their counts
console.log("Duplicates and their counts:");
for (var key in duplicates) {
  console.log(key + ": " + duplicates[key]);
}

// Print the number of letters in each unique element
console.log("\nNumber of letters in each unique element:");
for (var key in counts) {
  console.log(key + ": " + key.length + " letters");
}

// Total number of duplicates
var totalDuplicates = Object.values(duplicates).reduce(function (sum, value) {
  return sum + value;
}, 0);

console.log("\nTotal duplicate occurrences:", totalDuplicates);
