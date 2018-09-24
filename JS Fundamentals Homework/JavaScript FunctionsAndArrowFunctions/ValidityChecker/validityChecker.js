let validityChecker = ([x1, y1, x2, y2]) => {
    let check = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2, y2]
    ];

    for (let arr of check) {
        let newArr = distanceBetweenPoints(arr);
        if (Number.isInteger(newArr[0])) {
            console.log(`{${newArr[1]}, ${newArr[2]}} to {${newArr[3]}, ${newArr[4]}} is valid`);
        } else {
            console.log(`{${newArr[1]}, ${newArr[2]}} to {${newArr[3]}, ${newArr[4]}} is invalid`);
        }
    }

    function distanceBetweenPoints([x1, y1, x2, y2]) {
        let value = Math.sqrt((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
        return [value, x1, y1, x2, y2];
    }
};


validityChecker([3, 0, 0, 4]);