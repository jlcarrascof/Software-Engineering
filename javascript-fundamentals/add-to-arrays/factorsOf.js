// tu código aquí
const factorsOf = function(num) {

    let arr = [];

    for (let i=1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }

    return arr;

}

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]"
