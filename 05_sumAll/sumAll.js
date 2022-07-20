
const sumAll = (x, y) => {
    let total = 0;
    if (x > 0 && y > 0 && typeof x == 'number' && typeof y == 'number' ) {
        if (x < y) {
        for (let i = x; i <= y; i++ ) {
            total += i;
        }
        } 
        else if (x > y) {
        for (let i = y; i <= x; i++ ) {
            total += i;
        }
        }
        else {
        return 'ERROR';
        }
    } else {
        return 'ERROR';
    }
    return total;
  };
// Do not edit below this line
module.exports = sumAll;
