function fizBuzz(max) {
    let min = 0;
    while (min+1 < max-1) {
        min ++;
        if (min % 3 === 0) {
            if (min % 5 !== 0) {
                console.log(min);
            }
        } else if (min % 5 === 0) {
            console.log(min);
        }
    }
}

fizBuzz(20);
