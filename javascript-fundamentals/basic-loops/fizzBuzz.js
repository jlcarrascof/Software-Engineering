function fizzBuzz(max) {

    for (let i=0; i < max; i++) {
        if (i % 3 === 0) {
            if (i % 5 !== 0) {
                console.log(i)
            }
        } else if (i % 5 === 0) {
            console.log(i)
        }
    }

}

// Examples:

fizzBuzz(20); // prints out:
3
5
6
9
10
12
18
