You can isntall typescript locally:
```
npm init //for package.json
npm i typescript -D //adding ts compiler as a dev Dep
npm i ts-node -D //allows you to run your TypeScript code directly without precompiling your TypeScript code to JavaScript.
npx tsc -init //adding a ts.config file
npx ts-node basics.ts //to run the app in the ts env
npx tsc file.ts //compiles a .ts file into .js file
```

or one-line globally


types vs interfaces for object initialization in TS:

In TypeScript, both interface and type are used to define object types, but they have some subtle differences in their behavior and usage.


**Interface Syntax**:

```
interface Person {
    id: number;
    name: string;
    came: (date: Date) => void;
}
```

**Type Alias Syntax**:

```
type Person = {
    id: number;
    name: string;
    came: (date: Date) => void;
};
```

Extensibility: Interfaces are open to extension (OOP), meaning you can merge multiple declarations of the same interface together. On the other hand, **type aliases are not extensible and can't be merged**:

```
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

```
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

```
const format = (title: string, param: string | number) {
    return `${title} ${param}`
}

```
A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

VERY IMPORTANT - typescript does type checking at compile time not runtime, the latter would be impossibly resource expensive. Thus, intersecting js and ts means that you have to have that compile time type checking.
[misconception explained](https://youtu.be/-TsIUuA3yyE?t=829)