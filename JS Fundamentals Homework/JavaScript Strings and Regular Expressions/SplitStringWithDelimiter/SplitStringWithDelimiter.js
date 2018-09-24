let split = (input, delimiter) => {
    return input.split(delimiter).join('\n');
};

console.log(split('One-Two-Three-Four-Five', '-'));