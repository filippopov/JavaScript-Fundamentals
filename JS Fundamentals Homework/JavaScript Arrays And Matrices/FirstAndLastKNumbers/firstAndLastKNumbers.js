let firstAndLastKNumbers = (arr) => {
    let k = arr.shift();
    let firstArr = [];
    let secondArr = [];

    for (let i = 0; i < k; i++) {
        firstArr.push(arr[i]);
        secondArr.unshift(arr[arr.length - i - 1]);
    }

    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));
};

firstAndLastKNumbers([2, 7, 8, 9]);
