// your code here
const tripler = function(arr) {

    let finalArray = [];

    for (let i=0; i < arr.length; i++) {
        finalArray.push(arr[i] * 3);
    }

    return finalArray;

}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
