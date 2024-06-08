function threeIncreasing(arr) {

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] < arr[i+1]) && (i+1 < arr.length)) {
            if ((arr[i+1] < arr[i+2]) && (i+2 < arr.length)) {
                console.log(arr[i], arr[i+1], arr[i+2]);
                return true;
            }
        }
    }

    return false;

}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
