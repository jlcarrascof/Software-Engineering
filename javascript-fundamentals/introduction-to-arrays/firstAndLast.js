function firstAndLast(arr) {

    // Determine some keys conditions.

    numElements = arr.length;
    numPairs = false;
    total = 0;
    if (numElements % 2 === 0) {
        numPairs = true;
    }

    // Return the values.

    if (numPairs) {
        total = arr[0] + arr[numElements - 1];
        return total;
    } else {
        total = arr[0] - arr[numElements - 1];
        return total;
    }

}

console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
