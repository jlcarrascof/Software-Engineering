function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
}

console.log(sayHello("world"));

// Number 1
function sayGoodbye(name) {
    let msg = "Goodbye, " + name + ". See you soon."
    return msg;
}

console.log(sayGoodbye('Peter'));

// Number 2
function addTwoNumbers(a, b) {
    let sum = a + b;
    return sum;
}

console.log(addTwoNumbers(3,8));

// Number 3
function substractTwoNumbers(num1, num2) {
    let substract = num1 - num2;
    let message = "The result of substract " + num1 + " minus " + num2 + " is: " + substract;
    return message;
}

console.log(substractTwoNumbers(15, 5));

// Number 4
function multiplyTwoNumbers(a, b) {
    let multiply = a * b;
    let message = "The result of multiply " + a + " by " + b + " is: " + multiply;
    return message;
}

console.log(multiplyTwoNumbers(5, 8));

// Number 5
function divideTwoNumbers(num1, num2) {
    let divide = num1 / num2;
    let message = "The result of divide " + num1 + " by " + num2 + " is: " + divide;
    return message;
}

console.log(divideTwoNumbers(12, 2));

// Number 6
function addArrayElements(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum+= arr[i];
    }
    let message = "Adding my array " + arr + " the result is: " + sum;
    return message;
}

console.log(addArrayElements([5, 8, 7, 12]));

// Number 7

function findFirstAndLast(arr) {
    let firstElement = 0;
    let lastElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            firstElement = arr[i];
        }
        if (i === arr.length-1) {
            lastElement = arr[arr.length-1];
        }
    }
    return "The first element of my array is " + firstElement + " and the last one is " + lastElement + ".";
}

console.log(findFirstAndLast([5, 8, 7, 12]));

// Number 8

function addTwoArrays(arr1, arr2) {
    let finalArray = [];
    for (let i = 0; i < arr1.length; i++) {
        finalArray.push(arr1[i] + arr2[i]);
    }
    return "The result of adding arr1 " + arr1 + " with arr2 " + arr2 + " is " + finalArray;
}

console.log(addTwoArrays([8, 5, 3, 7], [6, 4, 8, 2]));

// Number 9

function howManyVowels(arr) {
    let word = arr.toString();
    let vowels = word.match(/[aeiou]/g);
    let numVowels = vowels.length;
    return "In the word " + arr + " you can found " + numVowels + " vowels.";
}

console.log(howManyVowels(["Javier Martinez"]));

// Number 10
function isContain(str) {
    let word = 'fuck';
    if (str.includes(word)) {
        return "The word " + word + " it appears in the sentence " + str;
    } else {
        return "The word " + word + " doesn't appear in the sentence " + str;
    }
}

console.log(isContain("The student has a lot of knowledge of Javascript."));
