TypeScript never changes the runtime behavior of JavaScript code.

Roughly speaking, once TypeScript’s compiler is done with checking your code, it erases the types to produce the resulting “compiled” code. This means that once your code is compiled, the resulting plain JS code has no type information.

A big advantage of static types in TS is that in JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error, in TS you will get a compile time error.

**Composing types**
There are several ways to have more than one type. One of them is the unions. You can declare that a type could be one of many types.

```sh
type WindowStates = "open" | "closed" | "minimized";
```

**Return type of functions**
function name(numbers): returnTypeOfFunction {

}
```sh
function getFirstElementOfNumber(numbers: number[]): number {
  return numbers[0];
}
```

**Generics**
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

**Dynamic vs static typing**
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

**Narrowing done via typeof guards**

```sh
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

- Coercing values to booleans

You can always coerce values to booleans by running them through the Boolean function, or by using the shorter double-Boolean negation '!!'. (The latter has the advantage that TypeScript infers a narrow literal boolean type true, while inferring the first as type boolean.)
```sh
# both of these result in 'true'
Boolean("hello"); # type: boolean, value: true
!!"world"; # type: true,    value: true
```


- overly prescriptive

```sh
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
```

TypeScript can often help you catch bugs early on, but if you choose to do nothing with a value, there’s only so much that it can do without being overly prescriptive. Another way to go is using a **linter**.

- null and undefined check each other
Checking whether something == null actually not only checks whether it is specifically the value null - it also checks whether it’s potentially undefined. The same applies to == undefined: it checks whether a value is either null or undefined.

**The in operator narrowing**

```sh
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
```

**Control flow analysis**

```sh
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

padLeft returns from within its first if block. TypeScript was able to analyze this code and see that the rest of the body (return padding + input;) is unreachable in the case where padding is a number. As a result, it was able to remove number from the type of padding (narrowing from string | number to string) for the rest of the function.


**Function type expression**

```sh
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

at first this may remind you of function declaration instead of expression but see:
```sh
fn: (a: string) => void
```

we have a 'fn' of type function '(a: string) => void'

Keep in mind that fn is just a convention and can be replaced with any other valid identifier that describes the purpose or role of the function parameter. The choice of fn as an abbreviation is not enforced by the TypeScript language itself but is often used by developers to indicate a generic function type.

**Siganture Calls**
In JavaScript, functions can have properties (They are the instances of the Function type. Because functions are objects, they have properties and methods like other objects - length and prototype) in addition to being callable. type expression syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we need a *call signature*:

```sh
#use ':' between the parameter list and the return type rather than '=>'
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";
 
doSomething(myFunc);
[LOG]: "default description returned true" 
```

we call doSomething with myFunc as a param which is a function that also has a param - someArg. Given the fact that doSomething accepts a special type fn: DescibableFunction as a param, myFunc has to adhere to this type. myFunc has the someArg part, but after the declaration of myFunc we see that a property description is manually added 'myFunc.description = "default description";', thus, making the whole code legal.

**Generic functions**

```sh
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

# s is of type 'string'
const s = firstElement(["a", "b", "c"]); #[LOG]: "a" 
# n is of type 'number'
const n = firstElement([1, 2, 3]); #[LOG]: 1 
# u is of type undefined
const u = firstElement([]); #[LOG]: undefined 

```

Generics are used when we expect more than one value type, same goes for function returns:
```sh
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```

 <Type> specifies a generic type parameter named Type. This allows the function to work with any type of array (arr) and return an element of the same type.
 if you console.log the type of firstElement it will be function, because typeof returns the runtime, not compile time type, the compiling version of TS is replaced with plain JS at runtime.

 Thus, to be fully typed you have to define the function <Type> the params : Type[] and the return type : Type | undefined {}

you could also infer separate input and output types:

```sh
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
# Parameter 'n' is of type 'string'
# 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```


*You can also put constraints on the type limiting legal kind of types, constrains are resolved by TS, so be mindful of this powerful tool*


**Optional Parameters**
either use the ? to escape empty, thus, undefined value
```sh
function f(x?: number) {
  # ...
}
f(); # OK
f(10); # OK
```
or set a default to capture empty, thus, undefined value
```sh
function f(x = 10) {
  # ...
}
```

**Optional Parameters in Callbacks**

If you use optional params in callbacks and subsequently try to call a method on that param, TS will print an error:

```sh
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i]);
  }
}


```

```sh
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
'i' is possibly 'undefined'.

});
```
THUS, when writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument.


**Objects**

- anonymous:
```sh
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```

- named via interface:
```sh
interface Person {
  name: string;
  age: number;
}
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

- named via type alias:
```sh
type Person = {
  name: string;
  age: number;
};
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

Object deconstruction:

```sh
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
                                #(parameter) xPos: number
  console.log("y coordinate at", yPos);
                                #(parameter) yPos: number
}
```

**Property modifiers**

optional properties (?):

```sh
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
```

readonly properties (readonly) - While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking:

```sh
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  # We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  # But we can't re-assign it.
  obj.prop = "hello";
#Cannot assign to 'prop' because it is a read-only property.
}
```

Readonly does not mean totally immutable - CAN change internal contents, but CANNOT re-write them:

```sh
interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  # We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 
function evict(home: Home) {
  # But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
#Cannot assign to 'resident' because it is a read-only property.

    name: "Victor the Evictor",
    age: 42,
  };
}

```
NB: resident is readonly, its properties, however, are still mutable

**Excess property checks**

```sh
interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
let mySquare = createSquare({ colour: "red", width: 100 });
#Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
#Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
```

You could argue that this program is correctly typed, since the width properties are compatible, there’s no color property present, and the extra colour property is insignificant.

-> However, TypeScript takes the stance that there’s probably a bug in this code. Object literals get special treatment and undergo excess property checking when assigning them to other variables, or passing them as arguments, but you can fix the definition of SquareConfig to accept both color and colour.


**Extending Types**

```sh
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```