function first(arr) {

    let specialized = [
       'Programming',
       'Hardware maintenance',
       'Cooking',
       'Translating',
       'Designing',
    ];

    let clumsy = [
        'Singing',
        'Accounting',
        'Teaching',
        'Exam-Making',
        'Acting',
        'Writing',
        'Lecturing',
        'Modeling',
        'Nursing'
    ];

    let allGold = 0;
    let specializedCounter = 1;
    let clumsyCounter = 1;
    let firstAmount = [];
    for (let arrElement of arr) {

        let [profesion, gold] = arrElement.split(' : ');
        gold = Number.parseFloat(gold);
        if (specialized.indexOf(profesion) > -1) {
            if (gold < 200) {
                continue;
            }

            allGold += (gold * 0.8);

            if (specializedCounter % 2 === 0) {
                allGold += 200;
            }

            specializedCounter++;
        } else if (clumsy.indexOf(profesion) > -1) {
            firstAmount.push(gold);

            if (clumsyCounter % 2 === 0) {
                allGold += (gold * 0.95);
            } else if (clumsyCounter % 3 === 0) {
                allGold += (gold * 0.9);
            } else {
                allGold += gold;
            }

            clumsyCounter++;
        } else {
            allGold += gold;
        }

    }

    console.log(`Final sum: ${allGold.toFixed(2)}`);
    if (allGold < 1000) {
        let less = 1000 - allGold;
        console.log(`Mariyka need to earn ${less.toFixed(2)} gold more to continue in the next task.`)
    } else {
        let more = allGold - 1000;
        console.log(`Mariyka earned ${more.toFixed(2)} gold more.`)
    }
}


// let test = ["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"];

let test = ["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"];

first(test);