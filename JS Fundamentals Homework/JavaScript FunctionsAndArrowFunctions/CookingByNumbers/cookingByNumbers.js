let cookingByNumbers = (arr) => {
    let number = arr.shift();

    let exec = {
        chop: number => number / 2,
        dice: number => Math.sqrt(number),
        spice: number => ++number,
        bake: number => number * 3,
        fillet: number => number * 0.8
    };

    for (let op of arr) {
        number = exec[op](number);
        console.log(number);
    }
};


cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);

//