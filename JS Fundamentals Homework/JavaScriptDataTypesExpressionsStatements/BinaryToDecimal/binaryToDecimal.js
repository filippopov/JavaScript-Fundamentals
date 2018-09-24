let binaryToDecimal = (binaryNumber) => {
    let result = 0;
    let counter = 0;
    for (let i = 7; i >= 0; i--) {
         result += Number(binaryNumber[i]) * Math.pow(2, counter);
         counter++;
    }

    return result;
};

console.log(binaryToDecimal('00001001'));;