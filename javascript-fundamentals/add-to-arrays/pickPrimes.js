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

function pickPrimes(array) {
    // your code here
}



console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
