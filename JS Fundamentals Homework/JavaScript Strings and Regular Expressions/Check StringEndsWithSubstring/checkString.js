let checkString = (text, substring) => {
    if (text.indexOf(substring) !== -1) {
        return true;
    }

    return false;
};

console.log(checkString('This sentence ends with fun?', 'fun?'));