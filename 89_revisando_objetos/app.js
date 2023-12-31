function example01() {

    const person = {
        name: 'Leonardo',
        lastname: 'Santos',
    };

    console.log(person.name);
    console.log(person.lastname);

    example01();
}

function example02() {

    const person = {
        name: 'Leonardo',
        lastname: 'Santos',
    };

    console.log(person['name']);
    console.log(person['lastname']);

    example02();
}

function example03() {

    const person = {
        name: 'Leonardo',
        lastname: 'Santos',
    };

    const key = 'name';
    console.log(person[key]);

    example03();
}

function example04() {

    const person = new Object();
    person.name = 'Leonardo';
    person.lastname = 'Santos';

    console.log(person.name);
    console.log(person.lastname);

    example04();
}

function example05() {

    const person = new Object();
    person.name = 'Leonardo';
    person.lastname = 'Santos';

    delete person.name;

    console.log(person);

    example05();
}

function example06() {

    const person = new Object();
    person.name = 'Leonardo';
    person.lastname = 'Santos';
    person.age = 39;

    person.speakName = function () {
        return (`Meu nome é ${this.name}`);
    };

    person.getBirthDate = function () {
        const current_date = new Date();
        return current_date.getFullYear() - this.age;
    };

    console.log(person.getBirthDate());

    example06();
}

function example07() {

    const person = new Object();
    person.name = 'Leonardo';
    person.lastname = 'Santos';
    person.age = 39;

    person.speakName = function () {
        return (`Meu nome é ${this.name}`);
    };

    person.getBirthDate = function () {
        const current_date = new Date();
        return current_date.getFullYear() - this.age;
    };

    for (const key in person) {
        console.log(person[key]);
    }

    example07();
}

function example08() {

    // factory functions
    function createPerson(name, lastname) {
        return {
            name,
            lastname,
            get fullName() { return `${this.name} ${this.lastname}`; }
        };
    }

    const person = createPerson('Leonardo', 'Santos');
    console.log(person.fullName);

    example08();
}

function example09() {

    // constructor functions
    function Person(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    const person = new Person('Leonardo', 'Santos');
    console.log(person);

    example09();
}

function example10() {

    // constructor functions
    function Person(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    const person = new Person('Leonardo', 'Santos');
    person.name = 'Joao';

    Object.freeze(person); // does not allow changes
    person.name = 'Lucas';

    console.log(person);

    example10();
}

function example11() {

    // constructor functions
    function Person(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        Object.freeze(this); // does not allow changes
    }

    const person = new Person('Leonardo', 'Santos');
    person.name = 'Joao';
    person.lastname = 'Vilarim';

    console.log(person);

}
example11();