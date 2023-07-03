// this is how you define a function
// nameOfFunc: (param: typeOfParam) => returnTypeOfFunc
export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback
    
}

// it similar to function type expression with conventional name fn:
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}


export function arrayMutate(numbers: number[], mutate: (v: number) => number ): number[] {
    return numbers.map(mutate)
}

// you can also use types:

type MutationFunction = (v: number) => number;

export function arrayMutate2(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate)
}

const newMutationFunction: MutationFunction = (v: number) => v * 100;



console.log(arrayMutate([1,2,3], (v)=>v*10));

// my closure

let val: number = 2;
function adder(num: number){
    return num + val;
}
console.log(adder(1));

// closure

function createAdder(num: number){
    return (val: number) => val + num;
}
const addOne = createAdder(1); // ~~ anon function (val: number) => val + 1;

console.log(addOne(55)); // ~~ anon function (55) => 55 + 1


