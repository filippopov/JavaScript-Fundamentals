let treasureLocator = (arr) => {
    let map = {
        tuvalu: {x1: 1, x2: 3, y1:1, y2: 3},
        tonga: {x1: 0, x2: 2, y1:6, y2: 8},
        cook: {x1: 4, x2: 9, y1:7, y2: 8},
        samoa: {x1: 5, x2: 7, y1:3, y2: 6},
        tokelau: {x1: 8, x2: 9, y1:0, y2: 1},
    };

    for (let i = 0; i < arr.length; i+=2) {
        let x = Number(arr[i]);
        let y = Number(arr[i + 1]);

        if (x >= map.tuvalu.x1 && x <= map.tuvalu.x2 && y >= map.tuvalu.y1 && y <= map.tuvalu.y2) {
            console.log('Tuvalu');
        } else if (x >= map.tonga.x1 && x <= map.tonga.x2 && y >= map.tonga.y1 && y <= map.tonga.y2) {
            console.log('Tonga');
        } else if (x >= map.cook.x1 && x <= map.cook.x2 && y >= map.cook.y1 && y <= map.cook.y2) {
            console.log('Cook');
        } else if (x >= map.samoa.x1 && x <= map.samoa.x2 && y >= map.samoa.y1 && y <= map.samoa.y2) {
            console.log('Samoa');
        } else if (x >= map.tokelau.x1 && x <= map.tokelau.x2 && y >= map.tokelau.y1 && y <= map.tokelau.y2) {
            console.log('Tokelau');
        } else {
            console.log('On the bottom of the ocean');
        }
    }
};

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);