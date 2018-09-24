let functionalCalculator = (numberOne, numberTwo, operator) => {
    let calc = (numberOne, numberTwo, operation) => {return operation(numberOne, numberTwo)};
    let sum = (numberOne, numberTwo) => {return numberOne + numberTwo};
    let subtract = (numberOne, numberTwo) => { return numberOne - numberTwo};
    let multiply = (numberOne, numberTwo) => {return numberOne * numberTwo};
    let divide = (numberOne, numberTwo) => {return numberOne / numberTwo};

    switch (operator) {
        case '+':
            return calc(numberOne, numberTwo, sum);
        case '-':
            return calc(numberOne, numberTwo, subtract);
        case '*':
            return calc(numberOne, numberTwo, multiply);
        case '/':
            return calc(numberOne, numberTwo, divide);
    }
};

console.log(functionalCalculator(5, 8, '+'));
