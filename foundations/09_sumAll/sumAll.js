const sumAll = function(first, second) {
    if (first < 0 || second < 0 ||
        !Number.isInteger(first) ||
        !Number.isInteger(second)
        ) {
        return "ERROR";
    }
    if (first > second) {
        let tmp = first;
        first = second;
        second = tmp;
    }
    let ans = 0;
    for (let i = first; i <= second; i++) {
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
