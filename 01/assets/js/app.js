const a = '4.2';
const b = 9;

console.log(a, b);
console.log("Constant a is of type:", typeof(a), ". Constant b is of type:", typeof(b));

function sum(a, b) {
    return Number(a) + b;
}

function difference(a, b) {
    return Number(a) - b;
}

function product(a, b) {
    return Number(a) * b;
}

function quotient(a, b) {
    return Number(a) / b;
}

function remainder(a, b) {
    return Number(a) % b;
}

function increment(a, b) {
    let numA = Number(a);
    numA++;
    let numB = b;
    numB++;
    return [numA, numB];
}

function decrement(a, b) {
    let numA = Number(a);
    numA--;
    let numB = b;
    numB--;
    return [numA, numB];
}

const addition = sum(a, b);
const subtraction = difference(a, b);
const multipliplication = product(a, b);
const division = quotient(a, b);
const modulo = remainder(a, b);
const postIncrement = increment(a, b);
const postDecrement = decrement(a, b);

console.log("Score of addition:", addition);
console.log("Score of subtraction:", subtraction);
console.log("Score of multipliplication:", multipliplication.toFixed(2));
console.log("Score of division:", division.toFixed(2));
console.log("Score of modulo:", modulo);
console.log("Scores od increment:", postIncrement);
console.log("Scores of decrement:", postDecrement);

const results = [
    { name: "Addition", value: addition},
    { name: "Substraction", value: subtraction},
    { name: "Multipliplication", value: multipliplication},
    { name: "Division", value: division},
    { name: "Modulo", value: modulo},
    { name: "postIncrement", value: postIncrement},
    { name: "postDecrement", value: postDecrement},
];

for (const result of results) {
    if (result.value > 20) {
        console.log(`${result.name} is greater than 20`);
    } else {
        console.log(`${result.name} is less than or equal to 20`)
    }
}