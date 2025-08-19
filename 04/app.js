
function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const arr = [];

for(let i = 0; i < 20; i++) {
   arr.push(randomNumber(1, 200));
}
console.log("Full array random 20 numbers:", arr);


function sortNumbers(arr) {
    return arr.sort(function(a, b){return b-a}).slice(0, 9);
}
const largestNumbers = sortNumbers(arr);
console.log("Largest numbers:", largestNumbers);



function arithmeticMean(arr) {
    if( arr.length !== 0) {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    } else {
        return 0;
    }
}
console.log(`Arithmetic mean of ${arr} is ${arithmeticMean(arr)}`);