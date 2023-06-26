TypeScript never changes the runtime behavior of JavaScript code.

Roughly speaking, once TypeScript’s compiler is done with checking your code, it erases the types to produce the resulting “compiled” code. This means that once your code is compiled, the resulting plain JS code has no type information.

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