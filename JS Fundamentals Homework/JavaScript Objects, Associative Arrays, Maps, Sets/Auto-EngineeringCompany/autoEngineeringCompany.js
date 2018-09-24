function autoEngineeringCompany(arr) {
    let company = new Map();

    for (let row of arr) {
        let [brand, model, price] = row.split(' | ');

        if (!company.has(brand)) {
            company.set(brand, new Map());
        }

        if (!company.get(brand).has(model)) {
            company.get(brand).set(model, Number(price));
        } else {
            company.get(brand).set(model, (company.get(brand).get(model) + Number(price)));
        }
    }

    for (let [brend, modelData] of company) {
        console.log(brend);
        for (let [model, value] of modelData) {
            console.log(`###${model} -> ${value}`);
        }
    }
}

let test = [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
    'Audi | Q7 | 5000'
];

autoEngineeringCompany(test);