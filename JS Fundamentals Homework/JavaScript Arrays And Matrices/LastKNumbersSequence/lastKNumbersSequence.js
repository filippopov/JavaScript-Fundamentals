let lastKNumbersSequence = (n, k) => {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let newArr = arr.slice(start, i);
        let sum = 0;
        for (let val of newArr) {
            sum += val;
        }
        arr.push(sum);
    }

    return arr.join(' ');
};

console.log(lastKNumbersSequence(6, 3));
