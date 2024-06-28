// your code here
function hasDoubleLetter(str) {
    if (typeof str !== "string") {
        return null;
    }

    let prevChar = str[0];
    for (let i=1; i < str.length; i++) {
        if (prevChar === str[i]) {
            return true;
        } else {
            prevChar = str[i];
        }
    }

    return false;
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null
