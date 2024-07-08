// your code here
function removeEWords(str) {

    let separator = " ";
    let charFind = "eE";
    let newWord = "";
    let newSentence = "";
    let hasE = false;

    for (let i = 0; i < str.length; i++) {
        if (!separator.includes(str[i])) {
            if (!charFind.includes(str[i]) && !hasE) {
                newWord += str[i];
            } else {
                newWord = "";
                hasE = true;
            }
        } else {
            if (!charFind.includes(newWord)) {
                newSentence += newWord + " ";
            }
            hasE = false;
            newWord = "";
        }
    }

    if (!charFind.includes(newWord)) {
        newSentence += newWord;
    }

    return newSentence.trim();

}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
