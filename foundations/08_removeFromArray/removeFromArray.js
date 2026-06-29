const removeFromArray = function(arr, ...vals) {
    return arr.filter(num => !vals.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
