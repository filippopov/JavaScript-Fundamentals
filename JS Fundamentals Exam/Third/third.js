function third(arr) {
    let startIndex = Number(arr.shift());
    let endIndex = Number(arr.shift());
    let changeString = arr.shift();
    let text = arr.shift();

    let countryPattern = /\b[A-Z][a-z]*[A-Z]\b/;

    let countryMatch = text.match(countryPattern);
    countryMatch = countryMatch[0];

    function replaceAt(index, endIndex, replacement, stringData) {
        let end = Math.min(endIndex, replacement.length);
        return stringData.substr(0, index) + replacement+ stringData.substr(index + end);
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    let country = replaceAt(startIndex, endIndex, changeString, countryMatch);
    country = country.toLowerCase();
    country = capitalizeFirstLetter(country);

    let cityPattern = /[0-9.]{3,}/g;

    let res = text.match(cityPattern);

    let cityResult = [];
    for (let num of res) {
        num = Number(num);
        num = Math.ceil(num);
        let chr = String.fromCharCode(num)
        cityResult.push(chr)
    }

    let city = cityResult.join('');
    city = city.toLowerCase();
    city = capitalizeFirstLetter(city);

    console.log(`${country} => ${city}`);
}

let test = ["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"];

let test1 = ["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"];

third(test1);