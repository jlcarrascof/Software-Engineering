function isSubstring(searchString, subString) {
    // your code here...
    let finalString = searchString.toLowerCase();
    console.log(finalString.indexOf(subString));
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
