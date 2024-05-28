function hasVowel(str) {

    const vowels = "aeiou";

    for (let i=0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            return true;
        }
    }

    return false;

}

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
