let diagonalSums = (arr) => {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i == j) {
                firstDiagonal += arr[i][j];
                secondDiagonal += arr[i][arr[i].length - j - 1];
            }
        }
    }

    return firstDiagonal + ' ' + secondDiagonal;
};

console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));
