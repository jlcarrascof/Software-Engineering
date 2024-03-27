function countVowels(word) {

    let numVowels = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i].includes('a')) {
            numVowels ++;
        } else if (word[i].includes('e')) {
            numVowels ++;
        } else if (word[i].includes('i')) {
            numVowels ++;
        } else if (word[i].includes('o')) {
            numVowels ++;
        } else if (word[i].includes('u')) {
            numVowels ++;
        }
    }

    return numVowels;
};
  
console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
