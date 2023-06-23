// if you dont name the type of the function parameters, they will be 'any' type
function addNumbers(a: number,b: number){
    return a + b;
}
export default addNumbers

export const addString = (str1: string, str2: string ='') => {
    return `${str1} ${str2}`;
}

export const format = (title: string, param: string | number) => {
    return `${title} ${param}`
}
