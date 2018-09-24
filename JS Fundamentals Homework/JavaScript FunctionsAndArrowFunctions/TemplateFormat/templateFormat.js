let yemplateFormat = (arr) => {
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n' + '<quiz>\n';

    for (let i = 0; i < arr.length; i+=2) {
        result += '  <question>\n' + `    ${arr[i]}\n` + '  </question>\n' + '  <answer>\n' + `    ${arr[i + 1]}\n` + '  </answer>\n';

    }


    result += '</quiz>\n';

    console.log(result);
};

yemplateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);