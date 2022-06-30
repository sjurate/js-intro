
console.clear();
/*
NUMBERS
normalus:
    - sveikieji
    - desimtainiai
    - teigiami / neigiami
ne normalus:
    - Infinity / -Infinity
    - NaN (not-a-number)
Kintamuju iniciavimas:
- const: reiksme negali buti pakeista (default)
- let: leidziam keisti reiksme
- var: nenaudoti, jei nenori problemu

Kupranugario sintakse: teigiamaBegalybe;

*/


const metai = 2022;
console.log(metai);

const PI = 3.14;
const minusSeven = -7;

console.log(PI);
console.log(minusSeven);

let pinigine = 0;
console.log(pinigine);

pinigine = 5;
console.log('Pinigine', pinigine);


const a = 5;
const b = 7;

console.log(a, b, a + b);


console.log('suma');
const suma = a + b;
console.log(a, b, suma);


console.log('skirtumas');
const skirtumas = a - b;
console.log(skirtumas);

console.log('sandauga');
const sandauga = a * b;
console.log(sandauga);

console.log('dalmuo');
const dalmuo = a / b;
console.log(dalmuo);

console.log('liekana');
const liekana = b % a;
console.log(liekana);

console.log('laipsnis')
const laipsnis = a ** b;
console.log(laipsnis);

console.log(2, 0, 2 ** 0);
console.log(2, 1, 2 ** 1);
console.log(2, 2, 2 ** 2);
console.log(2, 3, 2 ** 3);
console.log(2, 4, 2 ** 4);
console.log(2, 5, 2 ** 5);
console.log(2, 6, 2 ** 6);
console.log(2, 7, 2 ** 7);
console.log(2, 8, 2 ** 8);
console.log(2, 9, 2 ** 9);
console.log(2, 10, 2 ** 10);

console.log('--------------');

let total = 0;

console.log(total);

total = total + 2;

console.log(total);
console.log(total);
console.log(total);
console.log(total);
console.log(total);
console.log(total);
console.log(total);
console.log(total);

total = total + 2;
console.log(total);
total = total + 2;
console.log(total);
total = total + 2;
console.log(total);
total = total + 2;
console.log(total);

console.log('Nesamones: NaN');
console.log(0 / 0);
console.log(-0 / 0);

console.log(Infinity / Infinity);
console.log(-Infinity / Infinity);

console.log('-------------------------');

let silence = 0;
console.log(silence);
silence = silence + 5;
console.log(silence);

console.log('kitaip uzrasant');
// prie manes paties pridek 5 ir t.t.

silence += 5;
console.log(silence);


let silense = 1;
console.log(silense);
silense += 4;
console.log('+= 4 ->', silense);
silense *= 6;
console.log('*= 6 ->', silense);
silense -= 10;
console.log('-= 10 ->', silense);
silense /= 4;
console.log('/= 4 ->', silense);
silense %= 3;
console.log('%= 3 ->', silense);
silense **= 3;
console.log('**= 3 ->', silense);

console.clear();

let i = 1;
i = i + 1;

console.log(i);

i += 1;

console.log(i);

i += 1;

console.log(i);

i++;

console.log(i);


++i;

console.log(i);


console.log('----------------------');

let m = 0;
console.log(m++);
console.log(m++);
console.log(m++);
console.log(m++);
console.log(m++);
console.log(m++);
console.log(m);

let n = 100;
console.log(++n);
console.log(++n);
console.log(++n);
console.log(++n);
console.log(++n);
console.log(++n);
console.log(n);




