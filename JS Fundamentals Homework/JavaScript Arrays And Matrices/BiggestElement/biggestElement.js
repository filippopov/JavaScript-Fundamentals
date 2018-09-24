let biggestElement = (arr) => {
    let biggestElement = Number.MIN_SAFE_INTEGER;
    arr.forEach((e) => {e.forEach((ele) => {
        if (biggestElement < ele) {
            biggestElement = ele;
        }
    })});

    return biggestElement;
};

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
