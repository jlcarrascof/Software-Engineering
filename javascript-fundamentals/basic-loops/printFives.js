function printFives(max) {
    // With if

    let init = 0
    while (init < max) {
        if (init % 5 === 0) {
            console.log(init)
        }
        init ++;
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
