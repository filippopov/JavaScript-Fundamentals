let sortArray = (arr) => {
    return arr.sort().sort((a, b) => a.length - b.length).join('\n');
};


let test = ['alpha', 'beta', 'gamma'];
console.log(sortArray(test));