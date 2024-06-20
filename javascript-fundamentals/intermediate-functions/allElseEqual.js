function allElseEqual(arr) {

    let sum = arr.reduce((acc, num) => acc + num, 0);

    let halfSum = sum / 2;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === halfSum) {
            return arr[i];
        }
    }

    return null;

}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
