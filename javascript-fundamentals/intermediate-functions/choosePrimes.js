function isPrime(number) {

    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0) {
            return false;
        }

    }

    return true;

}

function choosePrimes(arr) {

}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
