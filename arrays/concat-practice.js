function combineArray(array1, array2) {
    let thirdArray = array1.concat(array2);
    return thirdArray;
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]
