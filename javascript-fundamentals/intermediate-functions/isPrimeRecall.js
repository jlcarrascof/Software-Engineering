// Determine if a number is prime.

function isPrime(number) {

    if (number > 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    let flag = 0;
    for (let i = 3; i < Math.sqrt(number); i++) {

        if (i % number === 0) {
            flag++;
        }

    }

    if (flag > 2) {
        return false;
    } else {
        return true;
    }

}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
