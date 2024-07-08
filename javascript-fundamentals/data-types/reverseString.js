// your code here
function reverseString(str) {
    // 1.- Convert to array to use reverse.
    let arr = str.split("");
    // 2.- Reverse array.
    arr = arr.reverse();
    // 3.- Delete commas.
    finalArr = [];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === ',') {
            finalArr += "";
        } else {
            finalArr += arr[i];
        }
    }
    // 4.- Convert the final array to string.
    return str = finalArr.toString();
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
