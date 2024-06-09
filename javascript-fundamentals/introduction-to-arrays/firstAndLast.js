function firstAndLast(arr) {
    // Verify if the array is empty.
    if (arr.length === 0) return 0;

    // Determine the quantity of the elements and if it is odd or even.
    let numElements = arr.length;
    let firstElement = arr[0];
    let lastElement = arr[numElements - 1];

    // If the element's number is odd, return the add.
    if (numElements % 2 === 0) {
        return firstElement + lastElement;
    } else {
        // If the element's number is even, return the substraction.
        return firstElement - lastElement;
    }
}

console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
