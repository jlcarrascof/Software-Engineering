// your code here
function minValue(arr) {

    if (arr.length === 0) {
        return null;
    }

    min = arr[0];

    for (let i=0; i < arr.length; i++) {
        if (min > arr[i+1]) {
            min = arr[i+1];
        }
    }

    return min;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
