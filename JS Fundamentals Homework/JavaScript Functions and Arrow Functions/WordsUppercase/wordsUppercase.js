let wordsUppercase = (text) => {
    text = text.toUpperCase();
    let result = text.match(/\w+/g);
    console.log(result.join(', '));
};

wordsUppercase('Hi, how are you?');