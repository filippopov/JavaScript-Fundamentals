let lastMonth = ([date, month, year]) => {
    let dateObject = new Date(`${year}-${month}-${date + 1}`);
    let newDateObject = new Date(`${year}-${dateObject.getMonth() + 1}`);
    return newDateObject.getUTCDate();
};

console.log(lastMonth([17, 3, 2002]));