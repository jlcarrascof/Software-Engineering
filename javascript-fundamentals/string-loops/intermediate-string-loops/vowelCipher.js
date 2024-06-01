function vowelCipher(string) {
    // your code here
    const vowels = "aeiou";
    let finalString = "";

    for (let i=0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            console.log(string[i]);
        }
    }
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
