console.clear();

class Dog {
    constructor (name, fur) {
        this.name = name;
        this.fur = fur;
        this.age = 0;
        this.eyeColor = 'brown';
        this.egs = 4;
        this.sound = 'Au!';
        this.tail = true;

    }

    introduce() {
        return `Sveiki, as ${this.name} ir man ${this.age} metu. ${this.sound}`;
    }

    getOlder() {
        this.age += 7;
    }

    changeColor(newFurColor) {
        this.fur = newFurColor;
    }
}

const rexas = new Dog('Rexas', 'brown'); 
const rikis = new Dog('Rikis', 'white');
const brisius = new Dog('Brisius', 'black');


//rexas.age++


// Butina parasyti .introduse() SKLIAUSTELIUS, KAD FUNKCIJA VEIKTU
console.log(rexas.introduce());

rexas.getOlder();
rexas.changeColor('dreamy');

console.log(rexas);
