
/* rozwiązanie z pętlą for */
const x = Number(prompt('Podaj liczbę od 1 do 9!'));

if(x > 9) {
   alert("Za duża liczba, uczymy się do 9!");
} else {
    for(let i =  1; i <= 9; i++) {
        const results = x * i;
        console.log(`${x} x ${i} = ${results}`);
    }
}



/* rozwiązanie z pętlą while  */

const a = Number(prompt('Podaj podstawę potęgowania! (max liczba 10)'));
const n = Number(prompt('Podaj wykładnij potęgowania! (max liczba 5)'));

let result = 1;
let sequence = '';


if(a < 1 || a > 10 && n < 1 || n > 5) {
    alert('Prosze podac prawidłowe liczby!');
} else {
    let i = 1;
    while(i <= n) {
        result *= a;
        sequence += a;
        if( i < n) sequence += ' * ';
        i++;
    }
    console.log(`${sequence} = ${result}`);
}

