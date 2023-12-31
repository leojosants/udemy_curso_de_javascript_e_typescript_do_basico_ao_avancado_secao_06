/* function example01() {
    function Person(name, lastame) {
        this.name = name;
        this.lastame = lastame;
        this.fullName = () => `${this.name} ${this.lastame}`;
    }

    const instanceatePerson = (name, lastname) => {
        return new Person(name, lastname);
    };

    const person_1 = instanceatePerson('Leonardo', 'Santos');
    const person_2 = instanceatePerson('Mara', 'Vilela');

    console.dir(person_1);
    console.dir(person_2);
*/

/* function Person(name, lastame) {
    this.name = name;
    this.lastame = lastame;
    this.fullName = () => `ORIGINAL: ${this.name} ${this.lastame}`;
}

const instanceatePerson = (name, lastname) => {
    return new Person(name, lastname);
};

Person.prototype.fullName = function () {
    return `PROTOTYPE: ${this.name} ${this.lastame}`;
}

const person_1 = instanceatePerson('Leonardo', 'Santos');
const person_2 = instanceatePerson('Mara', 'Santos');
const date = new Date();

console.dir(person_1);
console.dir(date);
*/

function Person(name, lastame) {
    this.name = name;
    this.lastame = lastame;
    // this.fullName = () => `ORIGINAL: ${this.name} ${this.lastame}`;
}

const instanceatePerson = (name, lastname) => {
    return new Person(name, lastname);
};

Person.prototype.fullName = function () {
    return `PROTOTYPE: ${this.name} ${this.lastame}`;
}

const person_1 = instanceatePerson('Leonardo', 'Santos');
const person_2 = instanceatePerson('Mara', 'Santos');
const date = new Date();

console.dir(person_1);
console.dir(date);