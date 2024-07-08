// your code here
function removeEWords(str) {

    let separator = " ";
    let charFind = "eE";
    let newWord = "";
    let newSentence = "";
    let hasE = false;
    for (let i=0; i < str.length; i++) {

        if (!separator.includes(str[i])) {
            if (!charFind.includes(str[i]) && hasE === false) {
                newWord += str[i]
            } else {
                newWord = "";
                hasE = true;
            }
        } else {
            if (!charFind.includes(newWord)) {
                if (str[i] === " ") {
                    newSentence = newSentence + newWord + " ";
                } else {
                    newSentence = newSentence + newWord;
                }
            }
            hasE = false;
            newWord = "";
        }
    }

    return newSentence;

}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
