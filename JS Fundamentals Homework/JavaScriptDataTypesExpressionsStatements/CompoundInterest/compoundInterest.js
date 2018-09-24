let compoundInterest = ([p, i, n, t]) => {
    n  = 12 / n;
    return Number((p * Math.pow((1 + i / (n * 100)), n * t)).toFixed(2)) ;
};

console.log(compoundInterest([1500, 4.3, 3, 6]));