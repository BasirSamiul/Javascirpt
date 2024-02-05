const nums = [2,5,4,6];

const product = nums.reduce((total, cur) => {

    return total + cur;

})

console.log(product);