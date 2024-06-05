function removeOranges(fruitArray) {
    for (let i = 0; i < fruitArray.length; i++) {
      console.log("Checking index " + i + ": " + fruitArray[i]);

      if (fruitArray[i] == "orange") {
        fruitArray.splice(i, 1);
        i--;
      }
    }
    return fruitArray;
}

console.log("1.- ", removeOranges(["apple", "banana", "orange", "peach", "orange", "pear"]));
console.log("2.- ", removeOranges(["orange", "apple", "banana", "orange", "orange", "pear", "apple"]));
// ["apple", "banana", "peach", "pear"]);
