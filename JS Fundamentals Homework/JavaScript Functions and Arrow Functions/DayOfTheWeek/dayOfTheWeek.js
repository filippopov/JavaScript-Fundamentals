let dayOfTheWeek = (day) => {
    let week = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7
    };

    if (Object.keys(week).indexOf(day) > -1) {
        return week[day];
    }

    return 'error';
};

console.log(dayOfTheWeek('Wednesday'));
