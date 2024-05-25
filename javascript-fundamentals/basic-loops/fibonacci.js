function fibonacci(number) {
    let values = [1, 1];

    for (let i=0; i < number; i++) {
        if (values.length > 2 || i >= 2) {
            let ant1 = values[i-1];
            let ant2 = values[i-2];
            let nextValue = ant1 + ant2;
            values.push(nextValue);
        }
    }

    if (number === 0) {
        values = [];
        return values;
    } else if (number === 1) {
        values = [1];
        return values;
    } else {
        return values;
    }

}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
