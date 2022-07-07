console.clear();

function letters(text, step) {
    if (typeof text !== 'string') {
        return 'Pirmas kintamasis turi buti tekstas';
    }

    if (text.length === 0
        || text.length > 100) {
        return 'Pirmasis kintamasis yra netinkamo ilgio, kintamasis negali buti tuscias ar ilgesnis nei 100 simboliu';
    }

    if (typeof step !== 'number'
        || !isFinite(step)
        || step === 0
        || step % 1 !==0) {
        return 'Antrasis kintamasis turi buti normalus, sveikasis skaicius, nelygus 0';
    }

    if ( step > text.length) {
        return 'Antrasis kintamasis negali buti didesnis nei teksto ilgis';
    }

    let answer = '';

/*
    for (let i= 0; i < text.length; i++) {
        const symbol = text[i];
        if (i % step === step - 1) {
        answer += symbol;
        }
    }
*/

/*
    for (let i= step - 1; i < text.length; i += step) {
        const symbol = text[i];
        answer += symbol;     
    }
*/



    for (let i= text.length + step; i >= 0; i += step) {
        const symbol = text[i];
        answer += symbol;     
    }


    return answer;
}


console.log(letters('laivas', -2));
console.log(letters('', 1));
console.log(letters('ananasas', -2));