function averageOfFour(num1, num2, num3, num4) {
    let addNumbers = num1+ num2+ num3+ num4;
    let result = addNumbers / 4;
    return result;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5
