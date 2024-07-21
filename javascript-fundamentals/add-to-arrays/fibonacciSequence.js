// Your code here

const fibonacciSequence = function(limit) {

    let finalArray = [];

    for (let i=0; i < limit; i++) {
        if (i === 0) {
            finalArray.push(i+1);
        }
        if (i === 1) {
            finalArray.push(i);
        }
        if (i > 1) {
            finalArray.push(finalArray[i-1] + finalArray[i-2]);
        }
    }

    return finalArray;

}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
