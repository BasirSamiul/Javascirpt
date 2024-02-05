function doubleArr(arr){

    const result = [];
    for (let num of arr){
        let double = num * 2;
        result.push(double);
    }
    return result;

}
const arr = doubleArr([2,5,6]);

console.log(arr);