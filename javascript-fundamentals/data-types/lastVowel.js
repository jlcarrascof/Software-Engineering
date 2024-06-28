// your code here
function lastVowel(str) {

    let vowels = "aeiouAEIOU";
    let lastVowel = "";
    for (let i=0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            lastVowel = str[i];
        }
    }

    if (lastVowel !== "") {
        return lastVowel;
    } else {
        return null;
    }

}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
