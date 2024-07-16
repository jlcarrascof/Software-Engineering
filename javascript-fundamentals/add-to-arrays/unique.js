// Your code here
const unique = function(arr) {

    let finalArray = [];

    for (let i=0; i < arr.length; i++) {
        if (finalArray.length !== 0) {
            if (!finalArray.includes(arr[i])) {
                finalArray.push(arr[i]);
            }

        } else {
            finalArray.push(arr[i]);
        }
    }

    return finalArray;

}


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
