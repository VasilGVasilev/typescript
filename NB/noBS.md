You can isntall typescript locally:
```sh
npm init //for package.json
npm i typescript -D //adding ts compiler as a dev Dep
npm i ts-node -D //allows you to run your TypeScript code directly without precompiling your TypeScript code to JavaScript.
npx tsc -init //adding a ts.config file

npx ts-node basics.ts //to run the app in the ts env
OR
npx tsc file.ts //compiles a .ts file into .js file
```

or one-line globally


types vs interfaces for object initialization in TS:

In TypeScript, both interface and type are used to define object types, but they have some subtle differences in their behavior and usage.


**Interface Syntax**:

```sh
interface Person {
    id: number;
    name: string;
    came: (date: Date) => void;
}
```

**Type Alias Syntax**:

```sh
type Person = {
    id: number;
    name: string;
    came: (date: Date) => void;
};
```

Extensibility: Interfaces are open to extension (OOP), meaning you can merge multiple declarations of the same interface together. On the other hand, **type aliases are not extensible and can't be merged**:

```sh
    interface Foo {
        a: number;
    }

    interface Foo {
        b: string;
    }

    const obj: Foo = {
        a: 1,
        b: 'hello',
    };
```
In the above example, the two interface declarations for Foo are merged, allowing the resulting object to have properties a and b.


What if we want to add a property subsequently?

```sh
const ids = {
    10: 'a',
    20: 'b',
}

ids[30] = 'c'
# Compiles an error

# SOLUTION -> utility types, namely, Record whose property keys are Keys and whose property values are Type

const ids: Record<number, string> = {
    10: 'a',
    20: 'b'
}
ids[30] = 'c'
```

what if you want two types to be valid for same param?

create a Union type:

```sh
const format = (title: string, param: string | number) {
    return `${title} ${param}`
}

```
A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

VERY IMPORTANT - types exist only until compile time, so conditional checking of 'typeof' will be executed at runtime
[misconception explained](https://youtu.be/-TsIUuA3yyE?t=829)


**Optionals**
if you use options as a function param, make it optional in the return, too:

```sh
function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x,y]);
    callback?.();
}
```

**Generics**
T is a placeholder for an inferred type or set when intializing <> is crucial during definition but also for initial legal values:

```sh
function simpleGenericState<T>(initial: T): [() => T, (v: T) => void]{
    let val: T = initial;
    return [
        () => val,
        (v: T) => val = v
    ]
}

# inferred boolean value
const [st1getter, st1setter] = simpleGenericState(true)
# intialized to be string or number ONLY
const [st4getter, st4setter] = simpleGenericState<string | number>('a')


```

**Unknown**
Unknown is like *any* type but it has stricter approach, for example:

```sh
let value: any;

value.foo.bar; // OK
value.trim(); // OK
value(); // OK
new value(); // OK
value[0][1]; // OK

let value: unknown;

value.foo.bar; // Error
value.trim(); // Error
value(); // Error
new value(); // Error
value[0][1]; // Erro
```