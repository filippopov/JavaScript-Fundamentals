function ancientVSMemory(arr) {
    let arrayData = arr.join(' ').split(' ');
    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i] == '32656' && arrayData[i + 1] == '19759' && arrayData[i + 2] == '32763') {
            let counter = Number(arrayData[i + 4]);
            let test = arrayData.slice(i + 6, i + 6 + counter);
            console.log(test.map(st => String.fromCharCode(st)).join(''));
        }
    }
}


let test = [ '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
            '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 ' ];

ancientVSMemory(test);