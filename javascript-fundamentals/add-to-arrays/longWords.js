// your code here

const longWords = function(arr) {

    let finalArr = [];

    for (let i=0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            finalArr.push(arr[i]);
        }
    }

    return finalArr;

}

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
