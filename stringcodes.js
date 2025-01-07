const str = "manikandan";
const reversedStr = str.split('').reverse().join('');
console.log("Reverse String is ",reversedStr);
console.log("Uppercase String",str.toUpperCase());
console.log("Lowercase String", str.toLowerCase());
console.log("Length of string is",str.length)
console.log("Last charecter of string is",str[str.length-1]);


//using loop reverse string
const str2 = "manikandan";
let reversedStr2 = "";

for (let i = str2.length - 1; i >= 0; i--) {
  reversedStr2 += str[i];
}

console.log(reversedStr2);

//iterate string 
let letters = "ABCDef";
console.log("Looping Charecters from a String")
for (let i=0; i<letters.length; i++){
    
    console.log(`Charecter at index value of ${i}: ${letters[i]}`);
    }
