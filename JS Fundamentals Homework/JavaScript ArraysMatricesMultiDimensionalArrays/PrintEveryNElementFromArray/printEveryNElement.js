let printEveryNElement = (arr) => {
    let n = arr.pop();
    return arr.filter((e, i) => i % n === 0).join('\n');
};

console.log(printEveryNElement([5, 20, 31, 4, 20, 2]));