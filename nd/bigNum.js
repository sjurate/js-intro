console.clear();

function bigNum (list) {
    if (!Array.isArray(list)) {
        return 'Kintamasis turi buti array (saraso) tipo';
    }

    if (list.length === 0) {
        return 'Kintamasis negali buti tuscias';
    }

    let biggest = -Infinity;

    for (i = 0; i < list.length; i++) {
        const number = list[i];
        if (number > biggest
            && isFinite(number)
            && typeof number === 'number') {
            biggest = number;
        }
    }

    if (biggest === -Infinity) {
        return 'Masyve nerasta nei vieno normalaus skaiciaus.';
    }

    return biggest
}

console.log(bigNum([1]), '->', 1);
console.log(bigNum([3]), '->', 3);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);

console.log(bigNum('pomidoras'), '->', 'ERROR');
console.log(bigNum([]), '->', 'ERROR');
console.log(bigNum(5), '->', 'ERROR');
console.log(bigNum(true), '->', 'ERROR');
console.log(bigNum(false), '->', 'ERROR');
console.log(bigNum(undefined), '->', 'ERROR');
console.log(bigNum(null), '->', 'ERROR');
console.log(bigNum({}), '->', 'ERROR');
console.log(bigNum([NaN, NaN, NaN, NaN, NaN]), '->', 'ERROR');
console.log(bigNum([Infinity, Infinity, Infinity]), '->', 'ERROR');

console.log(bigNum([0, -Infinity, Infinity, NaN, null, undefined, '', 'a', [], ['a']]), '->', 0);
console.log(bigNum([0, '2']), '->', 0);
console.log(bigNum([0, [3]]), '->', 0);
console.log(bigNum([0, true]), '->', 0);
console.log(bigNum([-1, false]), '->', -1);