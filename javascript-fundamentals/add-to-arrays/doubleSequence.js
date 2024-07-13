// Your code here
const doubleSequence = function(base, length) {

    let arr = [];
    let prevElem = 0;

    if (length <= 0) {
        return arr;
    }

    for (let i = 0; i < length; i++) {
        if (i === 0) {
            arr.push(base)
            prevElem = base;
        } else {
            prevElem *= 2;
            arr.push(prevElem);
        }
    }

    return arr;
}


console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]
