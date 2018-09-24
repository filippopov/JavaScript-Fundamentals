let triangleOfDollars = (number) => {
    for (let i = 1; i <= number; i++) {
        console.log(repeatDollar(i));
    }

    function repeatDollar(number) {
        return '$'.repeat(number);
    }
};

triangleOfDollars(3);