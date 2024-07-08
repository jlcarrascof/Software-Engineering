// your code here
function removeEWords(str) {

    let separator = " ";
    let charFind = "eE";
    let newWord = "";
    let newSentence = "";
    for (let i=0; i < str.length; i++) {

        if (!separator.includes(str[i])) {
            newWord += str[i]
        } else {
            if (!charFind.includes(newWord)) {
                if (str[i] === " ") {
                    newSentence = newSentence + newWord + " ";
                } else {
                    newSentence = newSentence + newWord;
                }
            }
        }
    }

    return newSentence;

}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
