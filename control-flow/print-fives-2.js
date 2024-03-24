function printFives(max) {
    let count = 0;
    while (count < max) {
        console.log(count);
        if (count % 5 === 0) {
            count += 5;
        }
    }
}

printFives(20);
