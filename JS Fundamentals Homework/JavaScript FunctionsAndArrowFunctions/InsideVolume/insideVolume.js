let insideVolume = (arr) => {
    for (let i = 0; i < arr.length; i+=3) {
        if (inVolume(arr[i], arr[i + 1], arr[i + 2])) {
            console.log('inside');
        } else {
            console.log('outside');
        }

    }


    function inVolume (x, y, z) {
        let result = false;
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2) {
            result = true;
        }

        return result;
    }
};


insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);