function palindrome(word) {
    let palindrome = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            palindrome = false;
        }
    }

    return palindrome;
}

console.log(palindrome('haha'));