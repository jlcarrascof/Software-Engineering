// Your code here
function sillyString(str) {

    let vowels = "aeiou";
    let newWord = "";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            newWord += str[i] + "b" + str[i];
        } else {
            newWord += str[i];
        }
    }

    return newWord;

}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
