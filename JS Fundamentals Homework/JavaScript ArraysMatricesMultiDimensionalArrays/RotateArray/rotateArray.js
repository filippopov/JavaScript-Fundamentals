let rotateArray = (arr) => {
    let rotateNumber = Number(arr.pop());
    rotateNumber = rotateNumber % arr.length;

    for (let i = 0; i < rotateNumber; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
};


rotateArray(['1', '2', '3', '4', '2']);