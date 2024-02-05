// const myMath = {
//     PI : 3.1416,
//     square: function(num) {
//        return console.log(`Hello, your square is: ${num * num}`);
//     },
//     cube: function(num){
//         return console.log(`Hello, your cube is: ${num * num * num}`);
//     }

// }
// myMath.square(25);
// console.log(myMath.PI);
// myMath.cube(3);
const myMath = {
    PI : 3.1416,
    square(num) {
       return console.log(`Hello, your square is: ${num * num}`);
    },
    cube(num){
        return console.log(`Hello, your cube is: ${num * num * num}`);
    }

}
myMath.square(2);
console.log(myMath.PI);
myMath.cube(100);