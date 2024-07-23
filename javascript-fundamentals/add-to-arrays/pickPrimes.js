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

    let finalArray = [];

    for (let i=0; i < array.length; i++) {
        if (isPrime(array[i])) {
            finalArray.push(array[i]);
        }
    }

    return finalArray;


}



console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
