function isPrime(number) {
    // Base case: any numbers less than 2 are not prime
    if (number < 2) {
      return false;
    }

    let i = 2;  // start from base case
    while (i < number) {   // do not include the number itself
      if (number % i === 0) {   // check if i is a factor of the number
        return false;
      }
      i++;
    }

    // number must be prime if it has not met any of the above conditions
    return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
