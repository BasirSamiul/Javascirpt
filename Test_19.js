//Making a simple calculator.

const calculator = {

    Add : (x, y) => {
        return x + y;
    },
    Subtract : (x, y) => {
        return (x - y);
    },
    Multiply : (x, y) => {
        return x * y;
    },
    Divide : (x, y) => {
        return x / y;
    }
};

const num1 = prompt(` Please Enter your first number: \n`);

const num2 = prompt(` Please Enter your second number: \n`);

const number1 = num;

const number2 = num2;

const add = calculator.Add(number1, number2);

const sub = calculator.Subtract(number1, number2);

const mult = calculator.Multiply(number1, number2);

const div = calculator.Divide(number1, number2);

console.log(` \n The summation is: ${add} \n `);

console.log(` The subtraction is: ${sub} \n `);

console.log(` The multiplication is: ${mult} \n `);

console.log(` The division is: ${div} \n `);
