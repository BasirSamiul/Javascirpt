//Demonstrate Deep function process.
function add (x, y){
    return x + y;
}

function subtract (x, y){
    return x - y;
}

function multiply (x, y){
    return x * y;
}

function divide (x, y){
    return x / y;
}

const operationAll = [add, subtract, multiply, divide];

for( let func of operationAll){

    let result = func(5,10);

    console.log(`Hello, Man the result is: ${result}` + `\n` );
    
}