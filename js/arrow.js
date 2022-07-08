console.clear();

const pirmas = 7;
const antras = 5;

function suma(a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${suma(pirmas, antras)}`);

const atimtis = function(a, b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${atimtis(pirmas, antras)}`);

// arrow funkcija
// jeigu logikos bloke yra tik 1 salyga (statement)
// nerasome {} ir return

const daugyba = (a, b) => {
    return a * b;
}
console.log(`${pirmas} * ${antras} = ${daugyba(pirmas, antras)}`);

const dalyba = (a, b) => a / b;
console.log(`${pirmas} - ${antras} = ${dalyba(pirmas, antras)}`);

// arrow funkcija
// jeigu parametru bloke yra tik 1 parametras
// nerasome ()
const kvadratu = a => a ** 2;
console.log(`${pirmas} ** 2 = ${kvadratu(pirmas)}`);
