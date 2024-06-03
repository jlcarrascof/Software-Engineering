function isPrime(number) {          // number = 5
    if (number < 2) {                 // false
      return false;
    }

    let i = 2;                        // i = 2
    while (i < number) {              // true
      if (number % i === 0) {         // 5 % 2 === 0   false
        return false;
      }
      i++;                            // i = 3
    }

    return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
