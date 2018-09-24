let modifyAverage = (number) => {

    let newNumber = number => number + '9';

    while (!checkForAverageThanFive(number)) {
        number = newNumber(number);
    }

    console.log(number);

    function checkForAverageThanFive(number) {
        number = '' + number;
        let sum = 0;
        let counter = 0;

        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
            counter++;
        }

        return (sum / counter) > 5;
    }
};

modifyAverage(101);
