// Your code here
function tripletTrue(str) {
    let strAnt = "";
    let strAct = "";
    let count = 0;
    let flag = false;

    for (let i=0; i < str.length; i++) {
        if (strAnt === "") {
            strAnt = str[i];
            count ++;
        } else {
            strAct = str[i];
            if (strAct === strAnt) {
                count ++;
                strAnt = strAct;
                if (count === 3) {
                    flag = true;
                    break;
                }
            } else {
                strAnt = str[i];
                count = 1;
                flag = false;
            }
        }
    }

    if (flag) {
        return true;
    } else {
        return false;
    }
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
