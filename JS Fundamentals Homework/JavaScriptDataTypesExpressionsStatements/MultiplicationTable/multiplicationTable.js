let multiplicationTable = (n) => {
    function header(n) {
        let result = '<tr><th>x</th>';
        for (let i = 1; i <= n; i++) {
            result += `<th>${i}</th>`;
        }

        result += '</tr>';

        return result;
    }

    function multiply (start, n) {
        let result = `<tr><th>${start}</th>`;
        for (let i = 1; i <= n; i++) {
            let number = start * i;
            result += `<td>${number}</td>`;
        }
        result += '</tr>';

        return result
    }

    let endResult = '<table border="1">' + '\n';

    endResult += header(n) + '\n';

    for (let i = 1; i <= n; i++) {
        endResult += (multiply(i, n) + '\n');
    }

    endResult += '</table>';

    return endResult
};

console.log(multiplicationTable(5));