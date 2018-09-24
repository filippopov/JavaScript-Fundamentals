let checkString = (text, matchString) => {
    let regex = new RegExp(matchString);
    return regex.test(text);
};

console.log(checkString('How have you been?', 'how'));