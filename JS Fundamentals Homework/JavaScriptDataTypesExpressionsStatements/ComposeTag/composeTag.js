let composeTag = ([fileLocation, alternateText]) => {
    return `<img src="${fileLocation}" alt="${alternateText}">`;
};

console.log(composeTag(['smiley.gif', 'Smiley Face']));