function isPrime(number) {

    if (number <= 1) {
        return false;
    }

    let control = 0;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            control++;
        }
    }

    if (control > 2) {
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
