function summationSequence(start, length) {
    // your code here
    let resultArray = [start];

    for (let i=1; i < length; i++) {
        previous = resultArray[i - 1];
        adding = calcAdding(previous);
        resultArray.push(adding);
    }

    return resultArray;
}

function calcAdding(number) {
    sum = 0;
    for (let i=1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
