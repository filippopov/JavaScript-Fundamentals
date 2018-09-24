let capitalize = (text) => {
    return text.split(' ').map((a) => {
        a = a.toLowerCase();
        return a.charAt(0).toUpperCase() + a.slice(1);
    }).join(' ');
};


console.log(capitalize('eERfewf weRFfewf wefeEwf'));;