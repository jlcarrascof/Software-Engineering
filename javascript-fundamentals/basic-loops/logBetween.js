function logBetween(lowNum, highNum) {

    // While version.

    /*
    let init = lowNum;
    while (init <= highNum) {
        console.log(init);
        init ++;
    }
    */

    // For version.

    for (let i=lowNum; i <= highNum; i++) {
        console.log(i);
    }

}

// Examples:
logBetween(-1, 2);
/* prints out:
-1
0
1
2
*/

logBetween(14, 6); // => prints nothing

logBetween(4, 6);
/* prints out:
4
5
6
*/
