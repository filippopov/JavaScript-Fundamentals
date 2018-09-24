let diagonalAttack = (arr) => {
    let newArray = [];
    arr.forEach((e, i) => {newArray.push(e.split(' ').map(Number))});

    let diagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i < newArray.length; i++) {
        diagonal += newArray[i][i];
        secondDiagonal += newArray[i][newArray.length - i - 1];
    }

    if (diagonal === secondDiagonal) {
        for (let row = 0; row < newArray.length; row++) {
            for (let col = 0; col < newArray[row].length; col++) {
                if ((col !== row) && (col !== (newArray[row].length - row - 1))) {
                    newArray[row][col] = diagonal;
                }

            }
        }
    }


    newArray.forEach((e, i) => {console.log(e.join(' '))})
};

let test = ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'];

diagonalAttack(test);
