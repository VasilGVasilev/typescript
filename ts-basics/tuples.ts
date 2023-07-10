// classic tuple

type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
    
}


console.log(add3DCoordinate([0, 0, 0], [10, 20, 30]))


// useState tuple is the most used as a React dev

// a custom closure (returns an accessor function and a settor function)

function simpleStringState(initial: string): [() => string, (v: string) => void]{
    let str: string = initial;
    return [
        () => str,
        (v: string) => str = v
    ]
}

const [str1getter, str1setter] = simpleStringState('hello');
console.log(str1getter()); // LOGS: hello
str1setter('hello world')
console.log(str1getter()); //LOGS: hello world due to str = v 

// In the provided code snippet, it is not strictly necessary to explicitly state the type of v as string in both the return type of the tuple and the actual return segment. TypeScript has a feature called contextual typing that allows it to infer the type of v based on its usage within the function body.

// However, explicitly annotating the type of v in both places can be considered good practice for code readability and clarity. It helps to communicate the intended type and makes it easier for other developers to understand the code.


