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
