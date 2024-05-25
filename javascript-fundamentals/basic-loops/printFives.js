function printFives(max) {

    /*
    // With if

    let init = 0
    while (init < max) {
        if (init % 5 === 0) {
            console.log(init)
        }
        init ++;
    }
    */

    // Without if

    for (let i=0; i < max; i+=5) {
        console.log(i)
    }

}

// Example:

printFives(20)

/*
prints out:
0
5
10
15
*/
