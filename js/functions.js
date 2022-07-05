console.clear();

const petras = [2, 3, 4, 5];
const maryte = [4, 5, 6, 7, 8];
const jonas = [10, 9, 8];
const ona = [1, 10, 2, 9, 3, 8, 4, 7];



function pazymiuVidurkis(pazymiai) {
    let suma = 0; 
    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i];
    }
    return suma / pazymiai.length;
}

console.log('Petro vidurkis:', pazymiuVidurkis(petras));
console.log('Marytes vidurkis:', pazymiuVidurkis(maryte));
console.log('Jono vidurkis:', pazymiuVidurkis(jonas));
console.log('Onos vidurkis:', pazymiuVidurkis(ona));

/*

let petroSuma = 0;
let marytesSuma = 0;
let jonoSuma = 0;
let onosSuma = 0;


for (let i = 0; i < petras.length; i++ ) {
    const mark = petras[i];
    //petroSuma += mark;
    petroSuma += petras[i];
}

for (let i = 0; i < maryte.length; i++ ) {
    const mark = maryte[i];
    marytesSuma += maryte[i];
}



const petroVidurkis = petroSuma / petras.length; 
const marytesVidurkis = marytesSuma / maryte.length;
const jonoVidurkis = jonoSuma / jonas.length;
const onosVidurkis = onosSuma / ona.length;


console.log(`Petras: ${petroVidurkis} vidurkis`);
console.log(`Maryte: ${marytesVidurkis} vidurkis`);
console.log(`Jono: ${jonoVidurkis} vidurkis`);
console.log(`Onos: ${onosVidurkis} vidurkis`);

*/


console.log('-------------------');

function suma(a, b) {
    return a + b;
}

console.log(` 7 + 5 = ${suma(7, 5)}`);
console.log(` 55 + 12 = ${suma(55, 12)}`);

function labas(name) {
    return `Labas, as ${name}`;
}

console.log(labas('Krabas'));

