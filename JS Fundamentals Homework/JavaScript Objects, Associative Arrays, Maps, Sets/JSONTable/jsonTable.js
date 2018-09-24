function jsonTable(arr) {
    let result = '<table>\n';
    for (let objectData of arr) {
        objectData = JSON.parse(objectData);

        result +=
                `	<tr>
		<td>${objectData.name}</td>
		<td>${objectData.position}</td>
		<td>${objectData.salary}</td>
	<tr>\n`;
    }

    result += '</table>';

    console.log(result);

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

let test = [
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'

];

jsonTable(test);