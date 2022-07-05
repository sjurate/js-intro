console.clear();

/* 
SWITCH
*/

const day = 5;

switch (day) {
    case 1: 
        console.log('pirmadienis');
        break;

    case 2: 
        console.log('antradienis');
        break;

    case 3: 
        console.log('treciadienis');
        break;

    case 4: 
        console.log('ketvirtadienis');
        break;

    case 5: 
        console.log('penktadienis');
        break;
    
    case 6: 
        console.log('sestadienis');
        break;

    case 7: 
        console.log('sekamdienis');
        break;

    default: 
        console.log('tokios dienos savaiteje nera');
        break;
}

console.log('----------------------------');

const weekday = 1;

switch (weekday) {
    case 1: 
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7: 
        console.log('savaitgalis');
        break;

    default:
        console.log('tokios dienos savaiteje nera');
        break;
}

console.log('--------------------------');

/* Kad isvardintu visas likusias stoteles iki Zalio tilto, iki Parko ziedas galutines */


const stotele = 'Tremtiniu 1';

switch (stotele) {
    case 'Parko ziedas':
        console.log('Parko ziedas');

    case 'Geniu': 
        console.log('Geniu');
    
    case 'Tremtiniu 1':
            console.log('Tremtiniu 1');
    
    case 'Rudens 1':
            console.log('Rudens 1');
    
    case 'Mindaugo tiltas':
            console.log('Mindaugo tiltas');
    
    case 'Zaliasis tiltas':
            console.log('Zaliasis tiltas');
            break;

    case 'Lvovo':
            console.log('Lvovo');
    
    case 'Tuskulenai':
            console.log('Tuskulenai');
    
    case 'Vasaros':
            console.log('Vasaros');
    
    case 'Rudens 2':
            console.log('Rudens 2');
    
    case 'Tremtiniu 2':
            console.log('Tremtiniu 2');
    
    case 'Geniu 2':
            console.log('Geniu 2');
    
    case 'Parko ziedas 2':
            console.log('Parko ziedas 2');
            break;
    }

    console.log('-------------------------');

    const duonosKepimas= 3;

    switch(duonosKepimas) {
        case 1: 
            console.log('pasiimti mitlus');
        case 2:
            console.log('pasiimti kiausinius');
        case 3:
            console.log('pasiimti mieliu');
        case 4:
            console.log('uzminkome tesla');
        case 5:
            console.log('suformuojame');
        case 6:
            console.log('pasauneme i krosni');
        case 7:
            console.log('kepame');
        case 8:
            console.log('istraukiame');
        case 9:
            console.log('serviruojame');
            break;

        default:
            console.log('toks etapas nenumatytas');
            break;
    }
    