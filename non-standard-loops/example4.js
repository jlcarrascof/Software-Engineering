const dishes = [0, 1, 2];
console.log("Dishes to clean: ", dishes);
function cleanDishes() {
    // Clean last dish by deleting it from array
    for (let i = dishes.length - 1; i >= 0; i--) {
        // This line is deleting 1 item from the array starting from index `i`
        console.log(dishes[i] + " cleaned")
        dishes.splice(i, 1)
    }
}

cleanDishes();
console.log("Dishes cleaned: ", dishes);
