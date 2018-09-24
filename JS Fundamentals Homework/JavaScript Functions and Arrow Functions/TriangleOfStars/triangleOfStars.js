function triangleOfStars(number) {
    var max = (number * 2);
    for (let i = 1; i < max; i++) {
        if (i <= number) {
            console.log(drawStars(i));
        } else {
            console.log(drawStars(max - i));
        }
    }

    function drawStars(number) {
        return '*'.repeat(number);
    }
}

triangleOfStars(5);
