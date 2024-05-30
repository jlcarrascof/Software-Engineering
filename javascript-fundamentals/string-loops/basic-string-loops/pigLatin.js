// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    // 1.- Verify is the word starts with a vowel

    let vowels = "aeiou";
    let finalWord = "";

    if (vowels.includes(word[0])) {
        finalWord = word + "yay";
    } else {

        let sliceWord = "";
        let restWord = "";
        for (let i=0; i < word.length; i++) {
            if (vowels.includes(word[i]) || restWord.length > 0) {
                restWord = restWord + word[i];
            } else {
                sliceWord = sliceWord + word[i];
            }
        }

        finalWord = restWord + sliceWord + "ay";
    }

    return finalWord;

};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
