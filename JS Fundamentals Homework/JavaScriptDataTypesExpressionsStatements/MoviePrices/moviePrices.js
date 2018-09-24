let moviePrices = ([filmName, day]) => {
    filmName = filmName.toLocaleLowerCase();
    day = day.toLocaleLowerCase();
    let result = 'error';
    let films = [];
    let theGodfather = {
        monday: '12',
        tuesday: '10',
        wednesday: '15',
        thursday: '12.50',
        friday: '15',
        saturday: '25',
        sunday: '30'
    };

    let shindlerList = {
        monday: '8.50',
        tuesday: '8.50',
        wednesday: '8.50',
        thursday: '8.50',
        friday: '8.50',
        saturday: '15',
        sunday: '15'
    };

    let casablanca = {
        monday: '8',
        tuesday: '8',
        wednesday: '8',
        thursday: '8',
        friday: '8',
        saturday: '10',
        sunday: '10'
    };

    let theWizardOfOzz = {
        monday: '10',
        tuesday: '10',
        wednesday: '10',
        thursday: '10',
        friday: '10',
        saturday: '15',
        sunday: '15'
    };

    films['the godfather'] = theGodfather;
    films['schindler\'s list'] = shindlerList;
    films['casablanca'] = casablanca;
    films['the wizard of oz'] = theWizardOfOzz;

    if (films.hasOwnProperty(filmName) && films[filmName].hasOwnProperty(day)) {
        result = films[filmName][day];
    }

    return result
};

console.log(moviePrices(['THE GODFATHER', 'FRIDAY']));;