function mostVowels(sentence) {

    sentence = sentence.toLowerCase();
    let words = sentence.split(" ");

    let maxVowels = 0;
    let maxVowelWord = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let vowels = "aeiou";
        let count = 0;

        for (let j = 0; j < word.length; j++) {
            if (vowels.includes(word[j])) {
                count++;
            }
        }

        if (count > maxVowels) {
            maxVowels = count;
            maxVowelWord = word;
        }
    }

    return maxVowelWord;

}

console.log(mostVowels("what a wonderful life")); // "wonderful"
console.log(mostVowels("hello world")); // "hello"
console.log(mostVowels("I am a keeper with some real rhythms")); // "rhythms"
