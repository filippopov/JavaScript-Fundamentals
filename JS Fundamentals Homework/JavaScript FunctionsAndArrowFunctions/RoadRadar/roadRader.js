let roadRadar = ([speed, city]) => {
    let speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let overSpeed = speed - speedLimit[city];
    
    console.log(speedMessage(overSpeed));

    function speedMessage(overSpeed) {
        let result;
        if (overSpeed <= 0) {
            result = '';
        } else if (overSpeed <= 20) {
            result = 'speeding';
        } else if (overSpeed <= 40) {
            result = 'excessive speeding';
        } else {
            result = 'reckless driving';
        }

        return result;
    }
};

roadRadar([21, 'residential']);