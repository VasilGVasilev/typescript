### Others:

- Visual Studio Code (VSCode) uses TypeScript's language service (a statically-typed superset of JS) to provide intelligent code suggestions, autocompletions, and warnings. On the other hand, Javascript being a dynamically-typed language means type checking is performed at runtime. Important to note that it is not that devs rely on compiling the code to see errors and only the run it, rather, it is due to this difference of compiled/interpreted(at runtime) that enables VSCode to have a special real-time service for TS to notify you of type errors while still coding. Relying on compilation to notify you of mistakes is a few seconds faster at best, but the essence is that the different technologies enable better code editor warning system.

- Typescript config:
 
    TS is transpiled to JS, but you can configure which ECMA -> 2015, 2016, 2017, etc:
    ```sh "target": "ES2015"```
    TS can use CommonJS or ES module system:
    ```sh "module": "commonjs" ```

    Best practice is to enable the following setting so no emit on error:
    ```sh "noEmitOnError":"true"```

- TS debugging:
https://www.youtube.com/watch?v=d56mG7DezGs&t=1048s
- Types:

Trick -> you can divide big numbers with underscore to make them more readable:
```sh let sales: number = 123_456_789```

No need to annotate variables:
```sh let sales: number = 123_456_789```
can be 
```sh let sales = 123_456_789```
TS infers the type to be a number out of the value you provided on definintion.

If no type is declared and no initialization is set, the variable is of type **any**:
```sh let level```
But this is agains the whole idea of TS, due to any type disabling effectively types on the variable