// Your code here
const chooseyEndings = function(arr, suffix) {
    if (!Array.isArray(arr)) {
        return [];
    }

    let finalArr = [];

    for (let i=0; i < arr.length; i++) {
        if (arr[i].endsWith(suffix)) {
            finalArr.push(arr[i]);
        }
    }

    return finalArr;

}


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]
