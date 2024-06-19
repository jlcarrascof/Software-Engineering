// Determine if a number is prime.

function isPrime(number) {

    if (number > 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }

}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
