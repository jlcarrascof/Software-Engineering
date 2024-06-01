function abbreviate(word) {
    let vowels = "aeiou";
    let finalWord = "";

    for (let i=0; i < word.length; i++) {
        if (!vowels.includes(word[i].toLowerCase())) {
            finalWord = finalWord+word[i];
        }
    }

    return finalWord;

}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
