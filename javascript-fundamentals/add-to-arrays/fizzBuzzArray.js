// your code here

function fizzBuzz(max) {

    let arr = [];

    for (let i=1; i < max; i++) {
        if (i % 3 !== 0) {
            if (i % 5 === 0) {
                arr.push(i);
            }
        } else {
            if (i % 5 !== 0) {
                arr.push(i);
            }
        }
    }

    return arr;

}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
