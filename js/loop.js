console.clear();

const numbers = [11, 22, 33, 44, 55];

// FOR
console.log('############## FOR');

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(`${i}) ${number}`);
}

// FOR OF
console.log('############## FOR OF');

let iOF = 0;
for (const number of numbers) {
   console.log(`${iOF++}) ${number}`)
   //console.log(number);
}

// WHILE
console.log('############## WHILE');

let iWHILE= 0;

while (iWHILE < numbers.length) {
    const number = numbers[iWHILE];
    console.log(`${iWHILE++}) ${number}`);
}

// DO WHILE
console.log('############## WHILE');

let iDOWHILE = 0;
do {
    const number = numbers[iDOWHILE];
    console.log(`${iDOWHILE++}) ${number}`);
} while(iDOWHILE < numbers.length);

// FOR EACH
console.log('############## FOREACH');

numbers.forEach(function (number, i, array) {
    console.log(`${i}) ${number}`, array) 
}
);

// FOR EACH + function
console.log('############## FOREACH + function');

function CALLBACK (number, i, array) {
    console.log(`${i}) ${number}`, array) 
}

numbers.forEach(CALLBACK);

// MAP
// grazina nauja masyva su modifikuotais duomenimis
console.log('############## MAP');

const doubleNumbers = numbers.map(function (number) {
    return number*2;
})
console.log(doubleNumbers);

const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const firstNameLetters = names.map(function (name) {
    return name[0];
});
console.log(names);
console.log(firstNameLetters);

const firstLetter = [];
for (i=0; i < names.length; i++) {
    const name = names[i];
    firstLetter.push(name[0]);
    /*if (i < 2) {
        break;
    }*/
}
console.log(firstLetter);

// FILTER
// grazina nauja masyva su atfiltruotais
// (tais, kuriu tau reikia) duomenimis
console.log('####### FILTER')

const oddNumbers = numbers.filter(function (number) {
    return number % 2 !==0;
    //jeigu true - grazina, jeigu false - praleidzia
})
console.log(oddNumbers);










/*
console.log('####### FOR (su`while`intas)');
let iFW = 0;
for (; iFW < numbers.length;) {
    const number = numbers[iFW];
    console.log(`${iFW++}) ${number}`);
}

console.log('####### FOR (su`while`intas + break)');
let iFWtrue = 0;
for (; true;) {
    const number = numbers[iFWtrue];
    console.log(`${iFWtrue++}) ${number}`);
    if (iFWtrue >= numbers.length) {
        break;
    }
}

console.log('####### WHILE + break');
let iWhileBreak = 0;
while (true) {
    const number = numbers[iWhileBreak];
    console.log(`${iWhileBreak++}) ${number}`);
    if (iWhileBreak >= numbers.length) {
        break;
    }
}
*/ 

