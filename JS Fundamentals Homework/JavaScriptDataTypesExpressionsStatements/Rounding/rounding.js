let rounding = ([number, fix = 15]) => {
    fix = fix > 15 ? 15 : fix;
    return Number(number.toFixed(fix));
};

console.log(rounding([3.1415926535897932384626433832795, 16]));