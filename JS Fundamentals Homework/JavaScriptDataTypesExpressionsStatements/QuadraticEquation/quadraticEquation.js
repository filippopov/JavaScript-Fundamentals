let quadraticEquation = (a, b, c) => {
    if (a === 0) {
        console.log('No');
        return;
    }

    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (typeof(discriminant) != 'number') {
        console.log('No');
    }


    if (discriminant < 0) {
        console.log('No');
        return;
    }

    if (discriminant === 0) {
        let x = -(b) / (2 * a);
        console.log(x);
        return;
    }

    let result = [];
    let x1 = (-(b) + Math.sqrt(discriminant)) / (2 * a);
    result.push(x1);
    let x2 = (-(b) - Math.sqrt(discriminant)) / (2 * a);
    result.push(x2);
    result.sort((a, b) => {return a - b});
    console.log(result[0]);
    console.log(result[1]);
};

quadraticEquation(6, 11, -35);