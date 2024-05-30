// your code here
function uncompress(word) {

    let finalStr = "";
    let number = 0;
    let letterToRepeat = "";
    let addStr = false;

    for (let i=0; i < word.length; i++) {
        if (isNaN(word[i])) {
            letterToRepeat = word[i];
        } else {
            number = Number(word[i]);
            finalStr = finalStr + addCaracters(letterToRepeat, number);
        }
    }

}

function addCaracters(str, number) {
    let newStr = "";
    for (let i=0; i < number; i++) {
        newStr = str + 1;
    }

    return newStr;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
