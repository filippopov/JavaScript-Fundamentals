let tripLength = ([x1, y1, x2, y2, x3, y3]) => {
    let pointOneTwo = distanceBetweenPoints([x1, y1, x2, y2]);
    let pointOneTree = distanceBetweenPoints([x1, y1, x3, y3]);
    let pointTwoTree = distanceBetweenPoints([x2, y2, x3, y3]);
    let pointTwoOne = distanceBetweenPoints([x2, y2, x1, y1]);
    let pointTreeOne = distanceBetweenPoints([x3, y3, x1, y1]);
    let pointTreeTwo = distanceBetweenPoints([x3, y3, x2, y2]);

    let sortDistance = {
        '1->2->3': pointOneTwo + pointTwoTree,
        '1->3->2': pointOneTree + pointTreeTwo,
        '2->1->3': pointTwoOne + pointOneTree,
        '2->3->1': pointTwoTree + pointTreeOne,
        '3->1->2': pointTreeOne + pointOneTwo,
        '3->2->1': pointTreeTwo + pointTwoOne
    };

    let sortByValue = Object.entries(sortDistance).sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }

        return a[1] - b[1];
    });

    let first = sortByValue.shift();
    let path = first[0];
    let result = first[1];
    console.log(`${path}: ${result}`);

    function distanceBetweenPoints([x1, y1, x2, y2]) {
        return Math.sqrt((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
    }
};

tripLength([-1, -2, 3.5, 0, 0, 2]);