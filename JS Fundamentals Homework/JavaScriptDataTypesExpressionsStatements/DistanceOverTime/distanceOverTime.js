let distanceOverTime = ([speedA, speedB, time]) => {
    let distanceA = (speedA * (time / 3600));
    let distanceB = (speedB * (time / 3600));
    let distance = Math.abs(distanceA - distanceB);
    console.log(distance * 1000);
};

distanceOverTime([11, 10, 120]);