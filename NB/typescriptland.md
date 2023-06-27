TypeScript never changes the runtime behavior of JavaScript code.

Roughly speaking, once TypeScript’s compiler is done with checking your code, it erases the types to produce the resulting “compiled” code. This means that once your code is compiled, the resulting plain JS code has no type information.

A big advantage of static types in TS is that in JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error, in TS you will get a compile time error.

Composing types
There are several ways to have more than one type. One of them is the unions. You can declare that a type could be one of many types.

```sh
type WindowStates = "open" | "closed" | "minimized";
```

Another way is the OOP language concept of generics. Instead of writing for example a separate function for each type, you can use generics to create a single function that can work with any type:

FROM THIS:
```sh
function getFirstElementOfNumber(numbers: number[]): number {
  return numbers[0];
}
function getFirstElementOfString(strings: string[]): string {
  return strings[0];
}
```

TO THIS:
```sh
function getFirstElement<T>(items: T[]): T {
  return items[0];
}
```

```sh
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers); // inferred type: number

const strings = ["hello", "world"];
const firstString = getFirstElement(strings); // inferred type: string

```
Most famous generic - FC //from Josh rtied coding - A trick every React Developer should know: ref Forwarding
In TypeScript, FC is a generic type provided by the React library. It stands for FunctionComponent and is used to define functional components in React with type annotations for the props they expect to receive:

```sh
import { FC } from 'react'

const Person: FC<PersonProps> = ({}) => {
    return <div>Child<div>
}

export default Child
```

Dynamic vs static typing
    JavaScript only truly provides dynamic typing - **running the code** to see what happens. Typescript is to use a static type system to make predictions about what code is expected **before it runs**.

```sh
const message = "hello!";
 
message();

# in JS the error is viewable only once you run the programm
TypeError: message is not a function
# in TS the error is viewable before runtime - at compile time or the TS type checking system in VSCode
This expression is not callable.
  Type 'String' has no call signatures.
```

The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.

**Objects**

- optional properties
You can specify that some of their properties are optional:
```sh
function printName(obj: { first: string; last?: string }) {
  # ...
}
# Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

BUT when using ? CHECK for undefined manually:
```sh
function printName(obj: { first: string; last?: string }) {
# Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
# obj.last is possibly undefined
  if (obj.last !== undefined) {
    #OK
    console.log(obj.last.toUpperCase());
  }
 
#A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

**Union types**

```sh
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
# OK
printId(101);
# OK
printId("202");
```

BUT TypeScript will only allow an operation if it is valid for every member of the union:
```sh
function printId(id: number | string) {
  console.log(id.toUpperCase());
# Property 'toUpperCase' does not exist on type 'string | number'.
# Property 'toUpperCase' does not exist on type 'number'.

}
```


**Type Aliases**
A type alias is exactly that - a name for any type. You can actually use a type alias to give a name to any type at all, not just an object type:
```sh
type ID = number | string;
```

**Interfaces**
- An interface in TypeScript defines a contract that an object must adhere to. . By using interfaces, you can enforce a certain structure and ensure that objects conform to a particular shape, promoting code maintainability and reducing errors.
- main benefit of interface over type is exentsability and adding new properties

TS is only interested in the structure of the value passed. 

```sh
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```