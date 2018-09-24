function janNation(arr) {
    let numbers = [];

    let commands = {
        '+': function (numbeOne, numberTwo) {
            return numbeOne + numberTwo;
        },
        '/': function (numbeOne, numberTwo) {
            return numbeOne / numberTwo;
        },
        '-': function (numbeOne, numberTwo) {
            return numbeOne - numberTwo;
        },
        '*': function (numbeOne, numberTwo) {
            return numbeOne * numberTwo;
        }
    };

    for (let arrElement of arr) {
        if (typeof arrElement === "number") {
            numbers.push(arrElement);
        } else {
            if (numbers.length < 2) {
                return 'Error: not enough operands!';
            }
            let [numberTwo, numberOne] = [numbers.pop(), numbers.pop()];
            numbers.push(commands[arrElement](numberOne, numberTwo));
        }
    }

    if (numbers.length > 1) {
        return 'Error: too many operands!';
    }

    return numbers[0];
}

let test = [31, 2, '+', 11, '/'];
// let test = [5,
//     3,
//     4,
//     '*',
//     '-'];

// let test = [-1,
//     1,
//     '+',
//     101,
//     '*',
//     18,
//     '+',
//     3,
//     '/']


console.log(janNation(test));;

