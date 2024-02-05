//Creating ES6 Object literals

// const getstats = (arr) => {

//     const max = Math.max(...arr);

//     const min = Math.min(...arr);

//     const sum = arr.reduce((sum, r) => sum + r);

//     const avg = sum / arr.length;

//     return {
//         max : max,
//         min : min,
//         sum : sum,
//         avg : avg
//     }

// }

//New feature in ES6
const getstats = (arr) => {

    const max = Math.max(...arr);
    console.log(`The maximum number of the list: ${max.toFixed(2)} \n`);

    const min = Math.min(...arr);
    console.log(`The minimum number of the list: ${min.toFixed(2)} \n`);

    const sum = arr.reduce((sum, r) => sum + r);
    console.log(`The total number of the list: ${sum.toFixed(2)} \n`);

    const avg = sum / arr.length;
    console.log(`The average number of the list: ${avg.toFixed(2)} \n`);

    return {

        max,
        min,
        sum,
        avg
    }

}



const mylist = [42,25,35,33,985,36,56];

const stats = getstats(mylist);
