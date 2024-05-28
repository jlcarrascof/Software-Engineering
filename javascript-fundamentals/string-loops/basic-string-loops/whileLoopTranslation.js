function eCounter(word) {
    let count = 0;

    for (let index = 0; index < word.length; index++) {
      let char = word[index];
      if (char === "e" || char === "E") {
        count += 1;
      }
    }

    return count;
};

console.log("Results using a for loop:");
console.log(eCounter("apple")); // => 1
console.log(eCounter("appleapple")); // => 2
console.log(eCounter("Appleee")); // => 3
