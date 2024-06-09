const addition = (a,b) => {
    let additionResult = a+b;
    return additionResult
}

let firstResult= addition (5,2)

console.log("Suma = ", firstResult);

const subtraction = (a,b) => {
    let subtractionResult = a-b;
    return subtractionResult
}

let secondResult= subtraction (5,2)

console.log("Resta = ", secondResult);

const multiplication = (a,b) => {
    let multiplicationResult = a*b;
    return multiplicationResult
}

let thirdResult= multiplication (5,2)

console.log("Multiplicación = ", thirdResult);

const division = (a,b) => {
    let divisionResult = a/b;
    return divisionResult
}

let fourthResult= division (5,2)

console.log("División = ", fourthResult);

const evenOrNot = (a) =>
{
    let remainder = a%2;
    if (remainder === 0)
        {return `El número ${a} es par` }
    if (remainder !==0)
        {return `El número ${a} es impar` }
    
}

let fifthResult = evenOrNot(5);

console.log(fifthResult);