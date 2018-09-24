function usernames(arr) {
    let result = new Set();
    for (let row of arr) {
        result.add(row);
    }

    console.log([...result].sort((a, b) => {
        let lengthResult = a.length - b.length;

        if (lengthResult === 0) {
            return a.localeCompare(b)
        }

        return lengthResult;
    }).join('\n'))
}

let test = [
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
];

usernames(test);