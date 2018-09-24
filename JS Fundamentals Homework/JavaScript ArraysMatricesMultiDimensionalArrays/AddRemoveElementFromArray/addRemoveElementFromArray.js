let addRemoveElement = (arr) => {
    let commands = {
        add : function(arr, element) {
            arr.push(element);

            return arr;
        },
        remove: function (arr) {
            arr.pop();

            return arr;
        }
    };

    let counter = 0;
    let resultArray = [];

    for (let command of arr) {
        counter++;
        resultArray = commands[command](resultArray, counter);
    }

    if (!resultArray.length) {
        return 'Empty';
    }

    return resultArray.join('\n');
};


console.log(addRemoveElement(['remove', 'remove', 'remove']));