function closureFunction () {
    const number = 0;
    function addToNumber(addedNumber) {
        return number + addedNumber;
    }

    return addToNumber
}

const addFive = closureFunction();

console.log(addFive(5));


// function cl() {
//     let m = 'a'
//     function printingM(){
//         console.log(m);
//     }
//     return printingM;
// }

// const printM = cl();
// printM()