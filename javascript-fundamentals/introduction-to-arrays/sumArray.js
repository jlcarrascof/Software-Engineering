function sumArray(array) {
    // your code here...

    let sumTotal = 0;

    for (let i=0; i < array.length; i++) {
        sumTotal += array[i];
    }

    return sumTotal;

}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
