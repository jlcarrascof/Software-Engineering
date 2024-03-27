function countVowels(word) {
    let vowelCounter = 0;
    let index = 0;

    while (index < word.length) {
        let letter = word[index];

        if (letter === 'a' || 
            letter === 'e' || 
            letter === 'i' || 
            letter === 'o' || 
            letter === 'u') {

            vowelCounter++;
        }

        index++;
    }
    
    return vowelCounter;

}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2