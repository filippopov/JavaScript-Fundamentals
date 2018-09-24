let gradsToDegrees = (grads) => {
    let degrees = grads * 0.9;
    degrees %= 360;

    if (degrees < 0) {
        return degrees + 360;
    }

    return degrees;
};


console.log(gradsToDegrees(400));