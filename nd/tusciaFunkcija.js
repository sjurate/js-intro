console.clear();

function tusciaFunkcija(){
    return false
}

console.log(tusciaFunkcija());

console.clear();

console.log('---------------------------');

function daugyba(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: neduotas pirmas skaicius';
    }
    if (typeof b !== 'number') {
        return 'ERROR: neduotas pirmas skaicius';
    }

    /*
    if(!isFinite(a)
    || !isFinite(b)) {
        return "ERROR: parametras turi buti normalus skaicius"
    }
    */

    if (a === Infinity
        || a === -Infinity
        || '' + a === 'NaN') {
        return 'ERROR: pirmas parametras turi buti normalus skaicius';
    }
    if (!isFinite(b)) {
        return 'ERROR: antras parametras turi buti normalus skaicius';
    }

    //console.log(a, b);
    const ats= a * b;
    return ats
}


console.log(daugyba());
console.log(daugyba(8));
console.log(daugyba('labas', 8));
console.log(daugyba(8, 'labas'));
console.log(daugyba(Infinity, 8));
console.log(daugyba(2, Infinity));
console.log(daugyba(-Infinity, 8));
console.log(daugyba(2, -Infinity));
console.log(daugyba(2, NaN));
console.log(daugyba(NaN, -5));

console.log(daugyba(2, 2));
console.log(daugyba(-2, -3));
console.log(daugyba(22, -3));
console.log(daugyba(8, 9));
console.log(daugyba(2, 3.5));
console.log(daugyba(2, 0));
console.log(daugyba(0, 2));


