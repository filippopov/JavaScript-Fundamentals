let evenPositionElement = (arr) => {
    return arr.filter((e, i) => {
        return i % 2 == 0;
    }).join(' ');
};

console.log(evenPositionElement(['20', '30', '40']));
