let radioCrystals = ([outValue, inValue]) => {
    let number = outValue - 1;
    let begin = inValue;

    let op = {
        cut: number => number / 4,
        lap: number => number * 0.8,
        grind: number => number -= 20,
        etch: number => number -= 2,
        xRay: number => number += 1,
        transportingAndWashing: number => Number(number)
    };

    let cutCounter = 0;

    while (op.cut(inValue) >= number) {
        inValue = op.cut(inValue);
        cutCounter++;
    }

    inValue = op.transportingAndWashing(inValue);

    let lapCounter = 0;

    while (op.lap(inValue) >= number) {
        inValue = op.lap(inValue);
        lapCounter++;
    }

    inValue = op.transportingAndWashing(inValue);

    let grindCounter = 0;

    while (op.grind(inValue) >= number) {
        inValue = op.grind(inValue);
        grindCounter++;
    }

    inValue = op.transportingAndWashing(inValue);

    let etchCounter = 0;

    while (op.etch(inValue) >= number) {
        inValue = op.etch(inValue);
        etchCounter++;
    }

    inValue = op.transportingAndWashing(inValue);

    let xReyCounter = 0;

    if (outValue === (inValue + 1)) {
        inValue = op.xRay(inValue);
        xReyCounter+=1;
    }

    console.log(`Processing chunk ${begin} microns`);
    if (cutCounter) {
        console.log(`Cut x${cutCounter}`);
        console.log('Transporting and washing');
    }

    if (lapCounter) {
        console.log(`Lap x${lapCounter}`);
        console.log('Transporting and washing');
    }

    if (grindCounter) {
        console.log(`Grind x${grindCounter}`);
        console.log('Transporting and washing');
    }

    if (etchCounter) {
        console.log(`Etch x${etchCounter}`);
        console.log('Transporting and washing');
    }

    if (xReyCounter) {
        console.log(`X-ray x${xReyCounter}`);
    }
    console.log(`Finished crystal ${inValue} microns`)
};

radioCrystals([1375, 50000]);