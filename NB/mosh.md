### Others:

- Visual Studio Code (VSCode) uses TypeScript's language service (a statically-typed superset of JS) to provide intelligent code suggestions, autocompletions, and warnings. On the other hand, Javascript being a dynamically-typed language means type checking is performed at runtime. Important to note that it is not that devs rely on compiling the code to see errors and only the run it, rather, it is due to this difference of compiled/interpreted(at runtime) that enables VSCode to have a special real-time service for TS to notify you of type errors while still coding. Relying on compilation to notify you of mistakes is a few seconds faster at best, but the essence is that the different technologies enable better code editor warning system.

- [Typescript config](https://www.typescriptlang.org/tsconfig) (compiler options - very helpful list with checks that make code more efficient) :
 
    TS is transpiled to JS, but you can configure which ECMA -> 2015, 2016, 2017, etc:
``` "target": "ES2015"```
    TS can use CommonJS or ES module system:
``` "module": "commonjs" ```

    Best practice is to enable the following setting so no emit on error:
``` "noEmitOnError":"true"```

- TS debugging:
https://www.youtube.com/watch?v=d56mG7DezGs&t=1048s
- Types:

Primitive types:
    string:
``` let employeeName:string = 'John Smith'; ```
    number:
``` let first:number = 123;```
    boolean:
``` let isPresent:boolean = true;```


    Trick -> you can divide big numbers with underscore to make them more readable:
``` let sales: number = 123_456_789```

    No need to annotate variables:
``` let sales: number = 123_456_789```
    can be 
``` let sales = 123_456_789```
    TS infers the type to be a number out of the value you provided on definintion.

    If no type is declared and no initialization is set, the variable is of type **any**:
``` let level```
    But this is agains the whole idea of TS, due to any type disabling effectively types on the variable

TS suggests the methods to be used based on the type:
![ts suggestions](https://github.com/VasilGVasilev/typescript/blob/main/NB/suggestionsBasedOnType.png?raw=true)

array
``` let user: number[] = [1, 2]```


tuple - fixed length array (basically you allocate each space for one value of one type )
``` let user: [number, string] = [1, 'Vasil']```
    ! You ould name each type and quantitity, the above means this tuple can have one number, one string in this order, you cannot add a string or number after that even though they are allowed types, the length is fixed to only two, to have anothe number, ould name it:
``` let user: [number, string, number] = [1, 'Vasil', 2]```
    There is a bug, tho:
``` 
const tup:[number, string] = [1, 'ax'];
tup.pu(2);
console.log(tup)
```
    [LOG]: [1, "ax", 2] 

Enums
    Define a set of named constants - numeric or string-based:

    ```
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right,
    }
    let myDirection: Direction = Direction.Up
    ```
    we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on.
    tirck -> if you add const in front of enum, the transpiled JS code will be more optimised

Functions
    -> Function with Parameter and Return Types (each param and return has its type annotated)
```
        function Sum(x: number, y: number) : number {
            return x + y;
        }

        Sum(2,3); // returns 5
```
VERY IMPORTANT -> turn on noImplicitReturns option in TS.config so that there is a check that catches undefined function returns:
```
        function Sum(x: number) : number {
            if(x>5){
                return 6;
            }
        }

        Sum(7); // returns undefined due to noImplicitReturn not checked
```

make param optional via question mark BUT it only has superior error msg system, better not to resort to optional rather do default values:
```
        function Sum(x: number, y?: number) : number {
            return x + y;
        }

        Sum(2); // Errors in code 'y' is possibly 'undefined'.
```  

Objects

```
let person: {
    id: number,
    name: string
} = {id: 1, name: 'Vasil'}
console.log( e.id)
LOGS >> 1
```
use readonly modifier to disable accidently modifiying the type of the object properties

```
let person: {
    readonly id: number,
    name: string
} = {id: 1, name: 'Vasil'}
console.log( e.id)
LOGS >> 1
```

object passed in in a function as a param:
```
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

methods:

```
let person: {
    readonly id: number,
    name: string,
    came: (date: Date) => void
} = {id: 1, name: 'Vasil', came: (date: Date) => {console.log(date)}}
LOGS >> today's date
```

Too verbose and hard-coded if we want to add other persons:
```
type Person = {
    readonly id: number,
    name: string,
    came: (date: Date) => void
}

let person: Person = {
    id: 1, 
    name: 'Vasil', 
    came: (date: Date) => {console.log(date)}
}
```