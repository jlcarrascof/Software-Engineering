function doubler(numbers) {
    let doubledNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let digit = numbers[i];
        doubledNumbers.push(digit * 2);
    }

    return doubledNumbers;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]