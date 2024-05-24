function leastCommonMultiple(num1, num2) {

    let upperLimit = num1 * num2;

    // Create the first list of elements.

    array1 = [];
    for (let i = 0; i <= upperLimit; i++) {
        if (i % num1 ===0) {
            array1.push(i);
        }
    }
    console.log(array1)

    // Create the second list of elements.

    array2 = [];
    for (let i = 0; i <= upperLimit; i++) {
        if (i % num2 ===0) {
            array2.push(i);
        }
    }
    console.log(array2)

    // Find MCM ....

    let number = 0;
    let check = false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== 0) {
            check = array2.includes(array1[i]);
            number = array1[i];
            break;
        }
    }

    console.log("MCM: " + number)
}

leastCommonMultiple(4, 6);
