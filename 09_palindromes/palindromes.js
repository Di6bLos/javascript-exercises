"use strict"


const palindromes = function (stringInput) {
    const remove = /[\w]/g;
    const stringForward = stringInput.toLowerCase().match(remove).join('');
    const stringReverse = stringForward.split('').reverse().join('');
    
  if (stringForward === stringReverse) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
