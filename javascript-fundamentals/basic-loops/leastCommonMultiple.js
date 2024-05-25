function leastCommonMultiple(num1, num2) {
    let finalNumber = 0;

    for (let i=0; i <=100; i++) {
        if (i % num1 === 0 && i !== 0) {
            limit = 0;
            while (limit <= 100) {
                if (limit % num2 === 0 && limit !== 0) {
                    if (limit === i) {
                        // I found LCM
                        finalNumber = limit;
                        break;
                    }
                }
                limit++;
            }
            if (finalNumber === i) {
                break;
            }
        }
    }

    return finalNumber;
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
