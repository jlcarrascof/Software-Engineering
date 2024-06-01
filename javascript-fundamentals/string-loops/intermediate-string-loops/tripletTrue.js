// Your code here
function tripletTrue(str) {
    let strAnt = "";
    let count = 0;

    for (let i=0; i < str.length; i++) {
        if (strAnt === "") {
            strAnt = str[i];
            count ++;
        } else {
            if (strAnt === str[i]) {
                count ++;
                strAnt = str[i];
                if (count === 3) {
                    return true;
                }
            } else {
                strAnt = str[i];
                count = 1;
            }
        }
    }

    return false;
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
