function eitherStringIncluded(sentence, word1, word2) {
    // your code here...
    let finalSentence = sentence.toLowerCase();
    let finalWord1 = word1.toLowerCase();
    let finalWord2 = word2.toLowerCase();

    if (finalSentence.includes(finalWord1) || finalSentence.includes(finalWord2)) {
        return true;
    } else {
        return false;
    }
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
