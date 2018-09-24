function squareOfStars(n = 5) {
    for (i = 1; i <= n; i++) {
        console.log(drawStars(n));
    }

    function drawStars(n) {
        return '*' + " *".repeat(n - 1);
    }
}

squareOfStars();
