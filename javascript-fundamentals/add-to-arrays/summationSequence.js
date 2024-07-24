function summationSequence(start, length) {
    let resultArray = [start];

    for (let i = 1; i < length; i++) {
        let previous = resultArray[i - 1];
        let adding = calcAdding(previous);
        resultArray.push(adding);
    }

    return resultArray;
}

function calcAdding(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
