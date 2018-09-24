let negativePositiveNumbers = (arr) => {
    let newArr = [];

    arr.forEach((e) => {
        e < 0 ? newArr.unshift(e) : newArr.push(e);
    });

    return newArr;
};

console.log(negativePositiveNumbers([7, -2, 8, 9]));
