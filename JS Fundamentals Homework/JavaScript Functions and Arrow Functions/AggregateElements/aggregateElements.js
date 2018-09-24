let aggregateElements = (arr) => {
    let sumOfInverse = 0;
    let sum = 0;
    let concat = '';

    arr.forEach((e) => {
        sum += e;
        sumOfInverse += 1 / e;
        concat += e;
    });

    console.log(sum);
    console.log(sumOfInverse);
    console.log(concat);
};

aggregateElements([1, 2, 3]);
