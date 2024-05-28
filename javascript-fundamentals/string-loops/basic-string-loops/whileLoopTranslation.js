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

// Translate the for loop above to a while loop below

function wCounter(word) {

    let count = 0;
    let index = 0;

    while (index < word.length) {
        let char = word[index];
        if (char === "e" || char === "E") {
            count += 1;
        }
        index ++;
    }

    return count;

}

console.log("Results using a while loop:");
console.log(wCounter("apple")); // => 1
console.log(wCounter("appleapple")); // => 2
console.log(wCounter("Appleee")); // => 3
