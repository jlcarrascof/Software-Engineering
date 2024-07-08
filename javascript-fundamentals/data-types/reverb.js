function reverb(str) {

    if (typeof str !== 'string') {
        return null;
    }

    let vowels = "aeiouAEIOU";

    let extraStr = "";
    lastVocal = -Infinity;
    for (let i=0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            lastVocal = i;
        }
    }

    if (lastVocal > 0) {
        extraStr = str.substring(lastVocal, str.length);
        return str + extraStr;
    } else {
        return null;
    }

}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
