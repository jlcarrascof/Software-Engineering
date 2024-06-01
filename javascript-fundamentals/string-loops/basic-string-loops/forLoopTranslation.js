function aCounter(word) {
    let index = 0;
    let count = 0;
    while (index < word.length) {
      let char = word[index];
      if (char === "a" || char === "A") {
        count += 1;
      }
      index++;
    }
    return count;
};

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3

// Translate the while loop above to a for loop below

function fCounter(word) {

    let count = 0;

    for (let index = 0; index < word.length; index++) {
        let char = word[index];
        if (char === "a" || char === "A") {
          count += 1;
        }
    }

    return count;

}

console.log("Results using a for loop:");
console.log(fCounter("apple")); // => 1
console.log(fCounter("appleapple")); // => 2
console.log(fCounter("aAapple")); // => 3
