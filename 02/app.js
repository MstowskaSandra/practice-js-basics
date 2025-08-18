
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

if(x > 9) {
   alert("Za duża liczba, uczymy się do 9!");
} else {
    for(let i =  1; i <= 9; i++) {
        const results = x * i;
        console.log(`${x} x ${i} = ${results}`);
    }
}10


/* rozwiązanie z pętlą while  */