const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    const numbers = [a, b, c];
    numbers.sort(function(a, b){ return b-a;});
    console.log("Sort numbers:", numbers);
    const sum = numbers[0] + numbers[1];
    return sum;
}
const sum = getSum(a, b, c);
console.log("Sum of two greater numbers:", sum);

function isEven(num) {
    if(typeof(num) === Number) {
        return null;
    } else {
        if (num % 2 === 0 ) {
            return true;
        } else {
            return false;
        }
    }
}
const isSumEven = isEven(sum);
console.log("Sum is even?", isSumEven);


function showInfo(sum, isSumEven) {
    switch(isSumEven) {
        case null:
            console.log(`Podany argument ${sum} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${sum} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${sum} jest nieparzysty`);   
    }
}
const completeInfo = showInfo(sum, isSumEven);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}