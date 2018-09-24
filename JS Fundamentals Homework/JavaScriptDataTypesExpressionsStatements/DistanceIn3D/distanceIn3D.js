let distanceIn3D = ([a1, a2, a3, b1, b2, b3]) => {
    return Math.sqrt(Math.pow((a1 - b1), 2) + Math.pow((a2 - b2), 2) + Math.pow((a3 - b3), 2));
};

console.log(distanceIn3D([1, 1, 0, 5, 4, 0]));