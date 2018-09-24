function storeCatalogue(arr) {
    let storeObject = {};
    for (let row of arr) {
        let [name, quantity] = row.split(' : ');
        if (!storeObject.hasOwnProperty(name[0])) {
            storeObject[name[0]] = [];
        }

        storeObject[name[0]].push(`${name}: ${quantity}`);
    }

    let sortKeys = Object.keys(storeObject).sort();

    for (let keys in storeObject) {
        storeObject[keys].sort();
    }

    for (let keys of sortKeys) {
        console.log(keys);
        storeObject[keys].forEach(a => console.log('  ' + a));
    }
}

let test = [
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
];

storeCatalogue(test);