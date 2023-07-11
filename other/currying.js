function add(x) { 
    return (y) => { 
        return x + y;
    } 
} 
const addTwo = add(1)
console.log(addTwo(2)) //LOGs: 3
