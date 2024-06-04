function removeOranges(fruitArray) {
    for (let i = 0; i < fruitArray.length; i++) {
     // If the item at the ith position is "orange"
     if (fruitArray[i] == "orange") {
      // Remove 1 item from the ith position
      fruitArray.splice(i, 1);
     }
    }
    return fruitArray;
}
