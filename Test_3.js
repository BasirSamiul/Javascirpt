function fruitprocessor (apples, oranges){
    console.log(apples, oranges);
    const fruit = `Just some ${apples} apples and few ${oranges} oranges.`;
    return fruit;
}

const fruitpresenter = fruitprocessor(5,5);
console.log(fruitpresenter);

