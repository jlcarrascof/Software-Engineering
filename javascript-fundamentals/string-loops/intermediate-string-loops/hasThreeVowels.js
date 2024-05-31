// Your code here
function hasThreeVowels(sentence) {
    let control = 0;
    let aFlag = false;
    let eFlag = false;
    let iFlag = false;
    let oFlag = false;
    let uFlag = false;

    for (let i=0; i < sentence.length; i++) {
        if (sentence[i] === 'a' && aFlag === false) {
            control ++;
            aFlag = true;
        } else if (sentence[i] === 'e' && eFlag === false) {
            control ++;
            eFlag = true;
        } else if (sentence[i] === 'i' && iFlag === false) {
            control ++;
            iFlag = true;
        } else if (sentence[i] === 'o' && oFlag === false) {
            control ++;
            oFlag = true;
        } else if (sentence[i] === 'u' && uFlag === false) {
            control ++;
            uFlag = true;
        }
    }

    return control >= 3;

}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
