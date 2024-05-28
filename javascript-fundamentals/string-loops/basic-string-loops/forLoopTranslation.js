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
