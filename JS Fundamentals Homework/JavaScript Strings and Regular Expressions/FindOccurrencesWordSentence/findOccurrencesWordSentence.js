let findThisShit = (text, word) => {
    word = '\\' + 'b' + word + '\\' + 'b';
    let regex = new RegExp(word, 'gi');
    console.log(text.match(regex).length)
};


findThisShit('The waterfall was so high, that the child couldn’t see its peak.', 'the');