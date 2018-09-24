let smallestTwoNumbers = (arr) => {
    arr.sort((a, b) => a - b).length = 2;

    return arr.join(' ');
};

console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));