/*******************************************************************************/
const speek = {
    speek() { console.log(`${this.name} está falando...`) },
};

const eat = {
    eat() { console.log(`${this.name} está comendo...`) },
};

const drink = {
    drink() { console.log(`${this.name} está bebendo...`) },
};

/*******************************************************************************/
function createPerson(name, lastname) {
    // composition
    // const prototype_person = { ...speek, ...eat, ...drink }; // or
    const prototype_person = Object.assign({}, speek, eat, drink);

    return Object.create(prototype_person, {
        name: { value: name },
        lastname: { value: lastname },
    });
}

/*******************************************************************************/
const person_1 = createPerson('Leonardo', 'Santos');
const person_2 = createPerson('Mara', 'Santos');

console.log(person_1);
console.log(person_2);