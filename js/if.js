console.clear();

/*
IF - reiksmiu palyginimas
palyginimo operatoriai:
visi: >, <, <=, >=, ==, !=, ===, !==
naudotini: >, <, <=, >=, ===, !==
nenaudotini: ==, !=
sablonai:
if () {}
if () {} else {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}
*/

const a = 7;
const b = 55;

if( a > b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B');
}

const eyeColor = 'raudona';

if (eyeColor === 'melyna') {
    console.log('Melynakis');
} else if (eyeColor === 'zalia') {
    console.log('Zaliaakis');
} else if (eyeColor === 'ruda') {
    console.log('Rudaakis');
} else {
    console.log('nezinoma akiu spalva');
}

const day = 8;

if (day === 1) {
    console.log('pirmadienis')
} else {
    if (day === 2) {
        console.log('antradienis')
    } else {
        if (day === 3) {
            console.log('treciadienis')
        } else {
            if (day === 4) {
                console.log('ketvirtadienis')
            } else {
                if (day === 5) {
                    console.log('penktadienis')
                } else {
                    if (day === 6) {
                        console.log('sestadienis')
                    } else {
                        if (day === 7){
                            console.log('sekmadienis')
                        } else {
                            console.log('nera tokios savaites dienos')
                        }

                    }
                }
            }
        }
    }
}

const nuoKadaSilta = 20;
const dabartineTemp = 25;
const yraKrituliai = false;

if (yraKrituliai) {
    if (dabartineTemp > nuoKadaSilta) {
        console.log('einam nuogi')
    } else {
        console.log('apsirengiam ir sketis')
    }
} else {
    if (dabartineTemp > nuoKadaSilta) {
        console.log('Alus')
    } else {
        console.log('Vynas')
    }
}
