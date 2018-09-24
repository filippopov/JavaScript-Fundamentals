let assignProperties = ([propertyA, propertyAValue, propertyB, propertyBValue, propertyC, propertyCValue]) => {
    let result = {};
    result[propertyA] = propertyAValue;
    result[propertyB] = propertyBValue;
    result[propertyC] = propertyCValue;
    return result
};

console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));