console.clear();


// ...numbers funkcijoje surinks visas duotas galimas reiksmes (pvz visas duotos konstantos reiksmes (arba rankiniu budu surasytas))

function didziausias(...numbers) {
    let max = -Infinity;
    for (const n of numbers) {
        if (n > max) max = n;
    }
    return max;
}

console.log(didziausias());

console.log(didziausias(1));

console.log(didziausias(1, 2));
console.log(didziausias(2, 1));

console.log(didziausias(1, 2, 3));
console.log(didziausias(2, 1, 3));

console.log(didziausias(1, 4, 2, 3));
console.log(didziausias(2, 1, 4, 3));

console.log(didziausias(1, 4, 2, 3, 5));
console.log(didziausias(2, 1, 4, 3, 5));

console.log('-------------------')

/*
 const studentas = (...info) => {
    let suma = 0;

    for (let i = 1; i <info.length; i++) {
        suma += info[i];
    }

    const vidurkis = suma / (info.length - 1);
    return `${info[0]} : ${vidurkis}`
} 
*/

 const studentas = (name, ...marks) => {
    let suma = 0;

    for (const m of marks) {
        suma += m;
    }

    const vidurkis = suma / marks.length;
    return `${name}: ${vidurkis}.`
}

console.log(studentas('Petras', 2, 4, 6, 8, 10));
console.log(studentas('Maryte', 10, 9, 8, 7, 6, 5, 4, 3));