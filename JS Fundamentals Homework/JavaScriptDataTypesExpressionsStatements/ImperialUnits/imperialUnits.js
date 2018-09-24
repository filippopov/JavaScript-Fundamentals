let imperialUnits = (number) => {
    let feet = Math.floor(number / 12);
    let inches = number % 12;
    return `${feet}'-${inches}"`;
};

console.log(imperialUnits(55));