const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  return array.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((x, y) => x* y);
};

const power = function(num, ex) {
 
  return Math.pow(num, ex);
};

const factorial = function(num) {
if (num < 2) {
  return 1}
 else {	
  for (let i = num -1; i > 0; i--) {
    num *= i;
  } return num;}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
