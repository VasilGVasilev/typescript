To understand reduce function, you have to take into account Higher order functions and closures.

Basic .reduce() function example:
```sh

let arr = [1, 2, 3];

const arrSum = arr.reduce(
    (totalOrAccumulator, currentValueToAddToTotalOrAccumulator) => {
        totalOrAccumulator + currentValueToAddToTotalOrAccumulator
    }
)

console.log(arrSum)

```

Under the hood:

let arr = [1, 2, 3];

let totalOrAccumulator = 0;

const arrSum = arr.forEach(
    currentValueToAddToTotalOrAccumulator => {
        totalOrAccumulator += currentValueToAddToTotalOrAccumulator;
        console.log(totalOrAccumulator)
    }
)

console.log(arrSum)