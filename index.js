// let name = 'Anas';
// let age = 30;

let person = {
    name: 'Anas',
    age: 30
};

//Dot Notation
person.name = 'Jone';

//Bracket Notation
person['name'] = 'Bismi';

//Target Property
let selection = 'name'
person[selection] = 'Sina';

console.log(person.name);