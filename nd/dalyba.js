console.clear();

function dalyba(a, b) {

    if (typeof a !== 'number' 
        || typeof b !== 'number'
        || !isFinite(a)
        || !isFinite(b)) {

        return 'Pateikta netinkama kintamojo reiksme, kintamasis turi buti normalus skaicius';
    }

    if (b === 0) {
        return 'Dalyba is 0 negalima';
    }
        
    const answer = a / b;

    return answer;

}

console.log(dalyba(0, 0));
console.log(dalyba(2, NaN));
console.log(dalyba(Infinity, -Infinity));
console.log(dalyba(-25, 1.5));
console.log(dalyba(16, 4));
console.log(dalyba(5, 'a'));

