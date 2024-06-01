function vowelCipher(string) {
    // your code here
    const vowels = "aeiou";
    let finalString = "";
    let positionVowels = "";

    for (let i=0; i < string.length; i++) {
        if (vowels.includes(string[i].toLowerCase())) {
            positionVowels = vowels.indexOf(string[i]);
            if (positionVowels < 4) {
                positionVowels++;
                finalString += vowels[positionVowels];
            } else if (positionVowels === 4) {
                positionVowels = 0;
                finalString += vowels[positionVowels];
            }
        } else {
            finalString += string[i];
        }
    }

    return finalString.toLowerCase();
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
