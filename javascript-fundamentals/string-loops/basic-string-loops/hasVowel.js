function hasVowel(str) {

    const myArray = str.split("");
    const vowels = "aeiou".split("");

    let hasVowels = false;

    for (let i=0; i < myArray.length; i++) {
        if (myArray.includes(vowels[i])) {
            hasVowels = true;
            break;
        }
    }

    return hasVowels;

}

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
