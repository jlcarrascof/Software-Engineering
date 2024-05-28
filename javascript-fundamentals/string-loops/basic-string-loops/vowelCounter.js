function countVowels(word) {

    let numVowels = 0;
    let wordToExplore = word.split("");
    let vowels = "aeiou";

    for (let i=0; i < wordToExplore.length; i++) {
        if (vowels.includes(wordToExplore[i])) {
            numVowels ++;
        }
    }

    return numVowels;

};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
