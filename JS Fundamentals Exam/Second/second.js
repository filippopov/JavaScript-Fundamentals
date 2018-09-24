function second(arr) {
    let valid = [];
    let invalid = [];
    let lookingWords = arr.shift();
    let delimiter = arr.shift();
    lookingWords = lookingWords.split(delimiter).filter(Boolean);

    for (let row of arr) {
        row = row.toLowerCase();
        let letAdd = true;
        for (let word of lookingWords) {
            word = word.toLowerCase();
            if (!row.includes(word)) {
                letAdd = false;
                break;
            }
        }

        if (lookingWords.length < 1) {
            letAdd = false;
        }

        if (letAdd) {
            valid.push(row);
        } else {
            invalid.push(row);
        }
    }


    if (valid.length > 0) {
        console.log('ValidSentences');
        for (let i = 0; i < valid.length; i++) {
            let rowNum = 1 + i;
            console.log(rowNum + '. ' + valid[i]);
        }
    }

    if (invalid.length > 0) {
        if (valid.length > 0) {
            console.log('='.repeat(30));
        }
        console.log('InvalidSentences');
        for (let i = 0; i < invalid.length; i++) {
            let rowNum = 1 + i;
            console.log(rowNum + '. ' + invalid[i]);
        }
    }
}

let test = ["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "];

let test1;

second(test);