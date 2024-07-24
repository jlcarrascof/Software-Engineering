function greatestFactorArray(array) {
    // your code here

    let finalArray = [];

    for (let i=0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            finalArray.push(array[i] / 2)
        } else {
            finalArray.push(array[i])
        }
    }

    return finalArray;

}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
