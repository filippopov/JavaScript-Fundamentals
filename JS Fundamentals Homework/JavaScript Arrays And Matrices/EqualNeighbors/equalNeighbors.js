let equalNeighbors = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i + 1 < arr.length && arr[i][j] == arr[i + 1][j]) {
                counter++;
            }

            if (j + 1 < arr[i].length && arr[i][j] == arr[i][j + 1]) {
                counter++;
            }
        }
    }

    return counter;
};

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));
