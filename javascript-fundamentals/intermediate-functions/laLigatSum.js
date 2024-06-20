function isPrime(n) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}

function laligatSum(n) {
    let sum = 0;

    for (let i = 2; i <= n; i += 1) {
      if (isPrime(i)) { // si i es un primo,
        sum += i;       // entonces sumarlo al total.
      }
    }

    return sum;
}

console.log(laligatSum(10)); // 17
console.log(laligatSum(20)); // 77
console.log(laligatSum(100)); // 1060
