console.clear();

const marks = [10, 2, 8, 4, 8, 10];

let suma = 0; 
let index = 0;

/*suma += marks[index++];

suma += marks[index++];

suma += marks[index++];

suma += marks[index++];

suma += marks[index++]; */

/* for (let i=0; i < marks.length; i++) {
    suma += marks[index++];
} */

for (let i=0; i < marks.length; i++) {
    suma += marks[i];
}

console.log('Suma:', suma);

const vidurkis = suma / marks.length;

console.log('Vidurkis:', vidurkis);

const people = ['Petras', 'Maryte', 'Jonas', 'Ona'];

for (let i = 0; i < people.length; i++) {
    const name = people[i];
    const labas = 'Labas, as ' + name + '!';
    console.log(labas);
}


console.log('-------------------');

const paraidziui = 'Paraidziui'

console.log(paraidziui[0]);

for (let i=0; i < paraidziui.length; i++) {
    console.log(paraidziui[i])
}

const labas = 'Labas rytas Lietuva!';
let labasNaujas = '';
console.log(labas);

for (let i = 0; i < labas.length; i++) {
    const simbolis = labas[i];
    labasNaujas += simbolis;
    console.log(simbolis, labasNaujas);
}


const abecele = 'abcdef';
var naujaAbecele = '';

console.log(abecele);

for (let i = abecele.length - 1; i >= 0; i--) {
    naujaAbecele += abecele[i];
    console.log(naujaAbecele);
}

