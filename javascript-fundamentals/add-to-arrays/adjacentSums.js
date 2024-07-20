// Your code here
const adjacentSums = function(arr) {

    let finalArray = [];

    for (let i=0; i < arr.length - 1; i++) {
        finalArray.push(arr[i] + arr[i+1]);
    }

    return finalArray;

}

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]
