function leastCommonMultiple(num1, num2) {
    let finalNumber = 0;
    let array = [];

    // First pass =

    for (let i=0; i <=100; i++) {
        if (i % num1 === 0 && i !== 0) {
            array.push(i);
        }
    }

    console.log("First array based in " + num1 + ":" + array)

    return finalNumber;
}

leastCommonMultiple(4, 6);
