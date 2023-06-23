// if you dont name the type of the function parameters, they will be 'any' type
function addNumbers(a: number,b: number):number{
    return a + b;
}
export default addNumbers

export const addString = (str1: string, str2: string ='') => {
    return `${str1} ${str2}`;
}

export const format = (title: string, param: string | number) => {
    return `${title} ${param}`
}

// void function
export const printFormat = (title: string, param: string | number) => {
    console.log(format(title, param))
}

// Promise function

export const fetchData = (url: string): Promise<string> => {
    return Promise.resolve(`Data from ${url}`);

}

// rest params

function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(' ')}`
}