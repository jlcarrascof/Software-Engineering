function isPrime(number) {
    // 1. Check if number is greater than 2
    //  - if not, return false (edge cases - not prime)
    if (number < 2) {
        return false;
    }

    // 2. Iterate from 2 up to number (exclusive)
    //   - Check if i is a divisor of the number (use %)
    //      - if it is, return false (not prime)
    let i = 2;
    while (i < number) {
        if (number % i === 0) {
          return false;
        }
        i++;
    }

    // 3. After loop completes, return true
    return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(10)); // false  (2 * 5 = 10)
console.log(isPrime(11)); // true
