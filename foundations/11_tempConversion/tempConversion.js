const convertToCelsius = function(faran) {
    let cel = (faran - 32) * 5 / 9;
    return Math.round(cel * 10) / 10;
};

const convertToFahrenheit = function(cel) {
    let faran = 9 / 5 * cel + 32;
    return Math.round(faran * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
