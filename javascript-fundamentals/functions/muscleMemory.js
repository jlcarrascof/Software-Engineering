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
