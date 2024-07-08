// your code here
function removeLastVowel(word) {

    let vowels = "aeiouAEIOU";
    let lastVowel = false;
    let position = -Infinity;
    for (let i=0; i <= word.length; i++) {
        if (vowels.includes(word[i])) {
            lastVowel = true;
            position = i;
        }
    }

    let firstStr = "";
    let lastStr = "";
    if (position >= 0) {
        firstStr = word.substring(0,position);
        lastStr = word.substring(position+1, word.length);
        return firstStr + lastStr;
    } else {
        return word;
    }

}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
