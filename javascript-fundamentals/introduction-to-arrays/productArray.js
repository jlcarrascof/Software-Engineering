function productWithReduce(nums) {
    let product = 1;

    for (let i=0; i < nums.length; i++) {
        product += nums[i];
    }

    return product;
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
