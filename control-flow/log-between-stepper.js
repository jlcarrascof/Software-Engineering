function logBetweenStepper(min, max, step) {
    while (min <= max) {
        console.log(min);
        min += step;
    }
}

logBetweenStepper(5, 9, 1);
logBetweenStepper(-10, 15, 5); 