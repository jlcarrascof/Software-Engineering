function yellStr(str) {
    let upperString = str.toUpperCase();
    return upperString + '!';
}

function yelledStrings(strings) {
    let yelled = [];

    for (let i = 0; i < strings.length; i++) {
      let string = strings[i];
      let newString = yellStr(string);
      yelled.push(newString);
    }

    return yelled;
}

console.log(yelledStrings(['hello', 'how', 'are', 'you?'])); // ['HELLO!', 'HOW!', 'ARE!', 'YOU?!']
