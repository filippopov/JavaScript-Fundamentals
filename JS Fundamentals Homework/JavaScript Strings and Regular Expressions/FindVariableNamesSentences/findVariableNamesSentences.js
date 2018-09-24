let findVariable = (text) => {
    let regex = /_([a-zA-Z0-9]+)/g;

    let result = regex.exec(text);
    let resultArr = [];
    while (result) {
        resultArr.push(result[1]);

        result = regex.exec(text);
    }

    console.log(resultArr.join(','));
};


findVariable('Input	Output The _id and _age variables are both integers');