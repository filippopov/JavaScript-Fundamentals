function arenaTier(arr) {
    let resultObject = new Map();

    for (let row of arr) {
        if (row == 'Ave Cesar') {
            break;
        }

        if (row.indexOf(' -> ') > -1) {
            let [gladiator, technique, points] = row.split(' -> ');

            if (!resultObject.has(gladiator)) {
                resultObject.set(gladiator, new Map());
                resultObject.get(gladiator).set('__total__', 0);
            }

            if (!resultObject.get(gladiator).has(technique)) {
                resultObject.get(gladiator).set(technique, Number(points));
                resultObject.get(gladiator).set('__total__', resultObject.get(gladiator).get('__total__') + Number(points));
            } else {
                if (resultObject.get(gladiator).get(technique) < Number(points)) {
                    resultObject.get(gladiator).set('__total__', resultObject.get(gladiator).get('__total__') - resultObject.get(gladiator).get(technique));
                    resultObject.get(gladiator).delete(technique);
                    resultObject.get(gladiator).set(technique, Number(points));
                    resultObject.get(gladiator).set('__total__', resultObject.get(gladiator).get('__total__') + Number(points));
                }
            }
        }

        if (row.indexOf(' vs ') > -1) {
            let [gladiator1, gladiator2] = row.split(' vs ');
            if (resultObject.has(gladiator1) && resultObject.has(gladiator2)) {
                gladiatorArr1 = [...resultObject.get(gladiator1)];
                gladiatorArr2 = [...resultObject.get(gladiator2)];

                for (let skils1 of gladiatorArr1) {
                    for (let skils2 of gladiatorArr2) {
                        if (skils1[0] == skils2[0] && skils1[0] != '__total__' && skils2[0] != '__total__') {
                            if (skils1[1] > skils2[1]) {
                                resultObject.delete(gladiator2);
                            } else {
                                resultObject.delete(gladiator1);
                            }
                        }
                    }
                }
            }
        }
    }

    let res = [...resultObject].sort((a, b) => {
        let lengthResult = b[1].get('__total__') - a[1].get('__total__');

        if (lengthResult === 0) {
            return a[0].localeCompare(b[0]);
        }

        return lengthResult;
    });


    for (let objRow of res) {
        console.log(`${objRow[0]}: ${objRow[1].get('__total__')} skill`);
        objRow[1].delete('__total__');
        let check = [...objRow[1]];
        check.sort((a, b) => {
            let res = b[1] - a[1];

            if (res === 0) {
                return a[0].localeCompare(b[0]);
            }

            return res;
        });

        for (let oneRow of check) {
            console.log(`- ${oneRow[0]} <!> ${oneRow[1]}`);
        }
    }
}

let test = [
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
];

arenaTier(test);

