let extract = (arr) => {
    let resultArray = [];
    let biggestElement = -Infinity;

    for (let el of arr) {
        if (el >= biggestElement) {
            resultArray.push(el);
            biggestElement = el;
        }
    }

    return resultArray.join('\n');
};

let test = [1, 3, 8, 4, 10, 12, 3, 2, 24];
console.log(extract(test));



