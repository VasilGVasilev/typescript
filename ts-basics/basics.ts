// basic types
let userName: string = 'Jack';
let hasLoggedIn: boolean = true;
let myNumber: number = 10;
let myRegex: RegExp = /foo/;

userName += ' Herrington';

console.log(hasLoggedIn);

// arrays

const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2];

// objects

const myPerson: {
    first: string,
    last: string
} = {
    first: 'Jack',
    last: 'Herrington'
}

type myPersonType = {
    first: string,
    last: string
};


interface Person {
    first: string,
    last: string
}

let personOne: Person = {
    first: 'Azis',
    last: 'Azisov'
}

console.log(personOne);
