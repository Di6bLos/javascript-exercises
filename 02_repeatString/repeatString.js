const repeatString = function(string, num) {
    const stringArr = [];

    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            stringArr.push(string);
        }
    } else {
        return "ERROR";
    }
    return stringArr.join('');
};


// Do not edit below this line
module.exports = repeatString;
