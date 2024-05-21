function threeOrSeven(num) {
    // your code here...

    // If version

    /*
    if (num % 3 === 0) {
        return true;
    } else if (num % 7 === 0) {
        return true;
    } else {
        return false;
    }
    */

    // Without if version

    return num % 3 === 0 || num % 7 === 0;

}

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false
