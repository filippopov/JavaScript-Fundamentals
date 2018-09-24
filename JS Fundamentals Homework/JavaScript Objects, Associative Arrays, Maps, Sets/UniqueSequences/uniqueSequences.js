function unicueSequence(arr) {
    let result = [];
    for (let row of arr) {
        let arrayData = JSON.parse(row);
        arrayData.sort((a, b) => b - a);
        let check = true;
        for (let newArr of result) {
            if (arraysEqual(newArr, arrayData)) {
                check = false;
            }
        }

        if (check) {
            result.push(arrayData);
        }
    }

    function arraysEqual(arr1, arr2) {
        if(arr1.length !== arr2.length)
            return false;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }

    result.sort((a, b) => a.length - b.length).forEach(a => console.log(`[${a.join(', ')}]`));
}

let test = [
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
];

unicueSequence(test);