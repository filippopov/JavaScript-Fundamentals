function four(arr) {
    let mapObj = new Map();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    for (let row of arr) {
        let [country, city, price] = row.split(' > ');
        city = capitalizeFirstLetter(city);

        if (!mapObj.has(country)) {
            mapObj.set(country, new Map());
        }

        if (!mapObj.get(country).has(city)) {
            mapObj.get(country).set(city, price);
        } else {
            if (price < mapObj.get(country).get(city)) {
                mapObj.get(country).delete(city);
                mapObj.get(country).set(city, price);
            }
        }
    }

    let sortByCountry = [...mapObj].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sortByCountry) {
        let res = [...value].sort((a, b) => a[1] - b[1]).join(' ').split(',').join(' -> ');

        console.log(key + ' -> ' + res);
    }
}


let test = ["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ];

four(test);