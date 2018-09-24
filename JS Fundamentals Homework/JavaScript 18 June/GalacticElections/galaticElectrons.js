function galaticElectrons(inputObj) {
    let systemMap = new Map();

    for (let data of inputObj) {
        if (!systemMap.has(data.system)) {
            systemMap.set(data.system, new Map());
        }

        if (!systemMap.get(data.system).has(data.candidate)) {
            systemMap.get(data.system).set(data.candidate, data.votes);
        } else {
            systemMap.get(data.system).set(data.candidate, systemMap.get(data.system).get(data.candidate) + data.votes);
        }
    }

    let newMapData = new Map();
    for (let oneElement of systemMap) {
        let sortedMapData = [...oneElement[1]].sort((a, b) => {
            return b[1] - a[1];
        });

        let votes = 0;

        if (sortedMapData.length === 1) {
            votes = sortedMapData[0][1];
        } else {
            votes = sortedMapData.reduce((a, b) => {
                return a[1] + b[1];
            });
        }

        newMapData.set(oneElement[0], new Map());
        newMapData.get(oneElement[0]).set(sortedMapData[0][0], votes);
    }

    let winerMap = new Map();

    for (let [key, value] of newMapData) {
        if (!winerMap.has([...value][0][0])) {
            winerMap.set([...value][0][0], [...value][0][1])
        } else {
            winerMap.set([...value][0][0], winerMap.get([...value][0][0]) + [...value][0][1]);
        }
    }

    let sorted = [...winerMap].sort((a, b) => b[1] - a[1]);
    let sum = [...winerMap].reduce((a, b) => b[1] + a[1]);
    let procentige = (sorted[0][1] / sum) * 100;

    let search = '';

    if (procentige > 50) {
        console.log(`${sorted[0][0]} wins with ${sorted[0][1]} votes`);
        console.log(`Runner up: ${sorted[1][0]}`);

        search = sorted[1][0];
    }

    let testResult = new Map();
    for (let oneElement of newMapData) {
        if ([...oneElement[1]][0][0] === search) {
            testResult.set(oneElement[0], [...oneElement[1]][0][1]);
        }
    }

    let sortOpa = [...testResult].sort((a, b) => b[1] - a[1]);

    sortOpa.forEach(a => console.log(`${a[0]}: ${a[1]}`));
}


let test = [ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 },
    ];


galaticElectrons(test);
