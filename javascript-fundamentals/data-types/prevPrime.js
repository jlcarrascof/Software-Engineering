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

function prevPrime(num) {

    if (num <= 2) {
        return null;
    }

    prevNumber = -Infinity;

    for (let i = 2; i < num; i++) {

        if (isPrime(i)) {
            prevNumber = i;
        }

    }

    return prevNumber;
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
