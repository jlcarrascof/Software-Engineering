// your code here
const yeller = function(arr) {

    let finalArray = [];

    for (let i=0; i < arr.length; i++) {
        finalArray.push(arr[i].toUpperCase() + "!");
    }

    return finalArray;

}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
