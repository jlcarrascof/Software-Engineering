// Your code here
function alternatingWords(arr) {

    for (let i=0; i < arr.length; i++) {
        if (i === 0 || i % 2 === 0) {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }

    return arr;
}

let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
