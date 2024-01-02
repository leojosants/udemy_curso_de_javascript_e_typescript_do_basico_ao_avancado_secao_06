/*******************************************************************************/
const instanceateMap = () => {
    return new Map();
};

/*******************************************************************************/
const example01 = () => {
    const people = [
        { id: 3, name: 'Leonardo' },
        { id: 2, name: 'Mara' },
        { id: 1, name: 'José' },
    ];

    /*
        const new_people = {};
    
        for (const person of people) {
            const { id } = person;
            new_people[id] = { ...person };
        }
    */
};

const example02 = () => {
    const people = [
        { id: 3, name: 'Leonardo' },
        { id: 2, name: 'Mara' },
        { id: 1, name: 'José' },
    ];

    const new_people = instanceateMap();

    for (const person of people) {
        const { id } = person;
        new_people.set(id, { ...person });
    }

    console.log(new_people.get(2));
};

const example03 = () => {
    const people = [
        { id: 3, name: 'Leonardo' },
        { id: 2, name: 'Mara' },
        { id: 1, name: 'José' },
    ];

    const new_people = instanceateMap();

    for (const person of people) {
        const { id } = person;
        new_people.set(id, { ...person });
    }

    for (const people of new_people) {
        console.log(people);
    }
};

const example04 = () => {
    const people = [
        { id: 3, name: 'Leonardo' },
        { id: 2, name: 'Mara' },
        { id: 1, name: 'José' },
    ];

    const new_people = instanceateMap();

    for (const person of people) {
        const { id } = person;
        new_people.set(id, { ...person });
    }

    for (const people of new_people.keys()) {
        console.log(people);
    }
};

const example05 = () => {
    const people = [
        { id: 3, name: 'Leonardo' },
        { id: 2, name: 'Mara' },
        { id: 1, name: 'José' },
    ];

    const new_people = instanceateMap();

    for (const person of people) {
        const { id } = person;
        new_people.set(id, { ...person });
    }

    for (const people of new_people.values()) {
        console.log(people);
    }
};

const example06 = () => {
    const people = [
        { id: 3, name: 'Leonardo' },
        { id: 2, name: 'Mara' },
        { id: 1, name: 'José' },
    ];

    const new_people = instanceateMap();

    for (const person of people) {
        const { id } = person;
        new_people.set(id, { ...person });
    }

    new_people.delete(2);
    console.log(new_people);
};

/*******************************************************************************/
// example01();
// example01();
// example03();
// example04();
// example05();
example06();