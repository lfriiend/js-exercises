//
const nomes = ['Eduardo', 'Maria', 'Joana'];

// Display the array values
console.log('Array nomes:', nomes);

// Add a new name to the array
nomes.push('Carlos');

// Display updated array
console.log('Updated array nomes:', nomes);

nomes.pop();

console.log('Updated array nomes:', nomes);



const nomesFiltrados = nomes.filter(valor => valor.length > 5);
console.log(nomesFiltrados);

const nomesFiltrados2 = nomes.filter(valor => valor.length <= 5);
console.log(nomesFiltrados2);


const people = [
    { name: 'Eduardo', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'Joana', age: 35 },
    { name: 'Carlos', age: 28 }
];



const peopleFiltrados = people.filter(value => value.age > 30);
console.log(peopleFiltrados);

const peopleFiltrados2 = people.filter(value => value.age <= 30);
console.log(peopleFiltrados2);

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

const peopleName = people.map(value => value.name);
console.log(peopleName);

const peopleAge = people.map(value => value.age);
console.log(peopleAge);

const addId = people.map((value, index) => {
    const newPerson = { ...value, id: index };
    return newPerson;
});
console.log(addId);
