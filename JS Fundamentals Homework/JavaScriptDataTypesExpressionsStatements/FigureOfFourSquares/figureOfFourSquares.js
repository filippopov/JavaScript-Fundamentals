let figureOfFourSquares = (n) => {
    function wall(n) {
        let result = '';
        for (let i = 1; i <= 2 * n - 1; i++) {
            if (i == 1) {
                result += '+';
            } else if (i == n) {
                result += '+';
            } else if (i == 2 * n -1) {
                result += '+';
            } else {
                result += '-';
            }
        }

        return result;
    }

    function middle(n) {
        let result = '';
        for (let i = 1; i <= 2 * n - 1; i++) {
            if (i == 1) {
                result += '|';
            } else if (i == n) {
                result += '|';
            } else if (i == 2 * n -1) {
                result += '|';
            } else {
                result += ' ';
            }
        }

        return result;
    }

    let end = (n % 2 === 0) ? n - 1 : n;
    let middleValue = Math.ceil(end / 2);

    let endResult = '';

    for (let i = 1; i <= end; i++) {
        if (i == 1) {
            endResult += (wall(n) + '\n');
        } else if (i == middleValue) {
            endResult += (wall(n) + '\n');
        } else if (i == end) {
            endResult += wall(n);
        } else {
            endResult += middle(n) + '\n';
        }
    }

    return endResult;
};

console.log(figureOfFourSquares(4));