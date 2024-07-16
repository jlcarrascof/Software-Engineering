function tripleSequence(start, length) {
    // your code here

    let arrResult = [];
    let factor = start;

    for (let i=0; i < length; i++) {
        if (i !== 0) {
            factor = factor * 3;
        }
        arrResult.push(factor);
    }

    return arrResult;

}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
