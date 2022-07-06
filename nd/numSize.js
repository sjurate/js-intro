console.clear();

function numSize(number) {
    if (typeof number !== 'number'
        || !isFinite(number)) {
        return 'Pateikta netinkama kintamojo reiksme - iveskite normalu skaiciu';
    }
    const numberAsString = '' + number;

    const allowedSymbols = '0123456789';
    let size = 0;


    for (let i = 0; i < numberAsString.length; i++) {
            const symbol = numberAsString[i];
            if (allowedSymbols.includes(numberAsString[i]))
            size++
    }



console.log('------------------');

/*

    let size = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        const symbol = numberAsString[i];
        if (allowedSymbols.indexOf(symbol) >= 0) {
            size++;
        }
    }

*/


/*let size = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        const symbol = numberAsString[i];
        //console.log(symbol);
        switch (symbol) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                size++;
                break;
        }
    }

    return size;

*/

    console.log('-------------------');
    
/*
    let numSize = numberAsString.length;

    if (number < 0) {
        numSize-- ;
    } 

    if (number % 1 !== 0) {
        numSize--;
    }

*/

    console.log('-------------------');

/*

    if (numberAsString.includes('-')) {
            numSize--; 
        }

    if (numberAsString.includes('.')) {
            numSize--;
        }

*/

    //return numSize
    return size;
}




console.log(numSize(true), '->', 'ERROR');
console.log(numSize('asd'), '->', 'ERROR');
console.log(numSize(NaN), '->', 'ERROR');
console.log(numSize(Infinity), '->', 'ERROR');
console.log(numSize(-Infinity), '->', 'ERROR');
console.log(numSize(), '->', 'ERROR');
console.log(numSize(null), '->', 'ERROR');

console.log(numSize(5), '->', 1);
console.log(numSize(781), '->', 3);
console.log(numSize(37060123456), '->', 11);
console.log(numSize(-5), '->', 1);
console.log(numSize(-781), '->', 3);
console.log(numSize(-37060123456), '->', 11);
console.log(numSize(3.14), '->', 3);
console.log(numSize(-3.14), '->', 3);

console.log(numSize(555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555), '->', 205);

console.log(numSize(7777777777777777777777777777777777777777777777777));