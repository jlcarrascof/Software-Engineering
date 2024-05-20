function isOdd(num) {
    // your code here!

    // With conditionals:
    /*
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    }
    */

    // Without conditionals:

    return Boolean(num % 2);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
