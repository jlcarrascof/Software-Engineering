function maxValue(arr) {
    // your code here

    if (arr.length === 0) {
        return null;
    }

    let bigger = arr[0];

    for (let i=0; i < arr.length; i++) {
        if (bigger < arr[i+1]) {
            bigger = arr[i+1];
        }
    }

    return bigger;

}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
