// Create a function that use callback function.
const numbers = [20,25,30,35,40,45,50];

// numbers.forEach( function (num){

//     console.log(num * 2);

// } 
//)



// function printTripple(num){

//     console.log(num  * 3);
    
// }

// numbers.forEach(printTripple);

const books = [
    {
        name: "Bidrohi",
        date: "31th December 2023",
        rating: 4.5

    },

    {
        name: "Sound System",
        date: "31th December 2023",
        rating: 5.00

    },

    {
        name: "Opera",
        date: "31th December 2023",
        rating: 4.7

    }
    
]

books.forEach(function (book){

    console.log(book);

})