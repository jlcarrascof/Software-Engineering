// Your code here
function moreDotLessDash(str) {

    let sumDots = 0;
    let sumDashes = 0;

    for (let i=0; i < str.length; i++) {
        if (str[i] === '-') {
            sumDashes++;
        }
        if (str[i] === '.') {
            sumDots++;
        }
    }

    return sumDots > sumDashes;

}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
