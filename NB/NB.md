### Others:

- Visual Studio Code (VSCode) uses TypeScript's language service (a statically-typed superset of JS) to provide intelligent code suggestions, autocompletions, and warnings. On the other hand, Javascript being a dynamically-typed language means type checking is performed at runtime. Important to note that it is not that devs rely on compiling the code to see errors and only the run it, rather, it is due to this difference of compiled/interpreted(at runtime) that enables VSCode to have a special real-time service for TS to notify you of type errors while still coding. Relying on compilation to notify you of mistakes is a few seconds faster at best, but the essence is that the different technologies enable better code editor warning system.

- Typescript config:
 
TS is transpiled to JS, but you can configure which ECMA -> 2015, 2016, 2017, etc:
```sh "target": "ES2015"```
TS can use CommonJS or ES module system:
```sh "module": "commonjs" ```

Best practice is to enable the following setting so no emit on error:
```sh "noEmitOnError":"true"```