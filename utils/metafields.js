export const getValueFromString = (value, key) => {
    var obj = JSON.parse(value);
    return obj[key];
}

export const getValueFromObjectString = (value, key) => {
    var obj = JSON.parse(value);
    return obj[0][key];
}