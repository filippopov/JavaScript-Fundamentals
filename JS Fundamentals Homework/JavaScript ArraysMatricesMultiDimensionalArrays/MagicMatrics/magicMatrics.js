let magicMatrices = (matrices) => {
    let lastValue;
    let result = true;
    let sumCol = {};
    for (let row = 0; row < matrices.length; row++) {
        let sumArray = matrices[row].reduce((a, b) => a + b);
        if (row !== 0 && lastValue !== sumArray) {
            result = false;
            break;
        }
        lastValue = sumArray;

        for (let col = 0; col < matrices[row].length; col++) {
            if (!sumCol.hasOwnProperty(col)) {
                sumCol[col] = [];
            }
            sumCol[col].push(matrices[row][col]);
        }

    }

    lastValue = 0;

    for (const index in sumCol) {
        let sumArray = sumCol[index].reduce((a, b) => a + b);
        if (index !== '0' && lastValue !== sumArray) {
            result = false;
            break;
        }

        lastValue = sumArray;
    }

    return result;
};


console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 6, 4]]
));


