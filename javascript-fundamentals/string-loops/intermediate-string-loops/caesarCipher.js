function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cipheredString = "";

    for (let i = 0; i < string.length; i++) {
        let x = alphabet.indexOf(string[i]);
        let newIndex = (x + num) % alphabet.length;
        let newChar = alphabet[newIndex];
        cipheredString += newChar;
    }

    return cipheredString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
