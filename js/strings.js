/*
STRINGS
tekstas - simboliu kratinys/sarasas/masyvas
teksto iniciavimas:
- dvygubos kabutes (")
- viengubos kabutes (')
- backtick (apostrofas) (`)
*/

const s12_1 = 'Vienguba kabute(\') ir dvyguba kabute(\").';
console.log(s12_1);
const s12_2 = "Vienguba kabute(\') ir dvyguba kabute(\").";
console.log(s12_2);

const slash1 = 'Slash (\\).';
console.log(slash1);

const slash2 = "Slash (\\\\).";
console.log(slash2);

const enter = 'Labas\r\n\
rytas\r\n\
Lietuva.';
console.log(enter);

const backEnter = `Labas
rytas
Lietuva.`;
console.log(backEnter);

console.clear();

// Labas, as Krabas Patis.
// Labas, as Vaikas Bosas.

const firstName1 = 'Krabas';
const lastName1 = 'Patis';
const firstName2 = 'Vaikas';
const lastName2 = 'Bosas';

/* 
const labas_1 = 'Labas, as ' + firstName1 + ' ' + lastName1 + '.';
console.log(labas_1); 
*/

const labas1_b = `Labas, as ${firstName1} ${lastName1}.`; // Veikia su BACKTICK tik 
console.log(labas1_b);

const labas2_b = `Labas, as ${firstName2} ${lastName2}.`;
console.log(labas2_b);

console.log(`Labas, as ${firstName1} ${lastName1}.`);

const a = 7;
const b = 5;

console.log(`${a} + ${b} = ${a + b}`);

console.log('a+b=', a + b);


