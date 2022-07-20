const ftoc = function(degreesF) {
  const degreesC = (degreesF -32) * 5/9;
  return Math.round(degreesC * 1e1)/1e1;
};

const ctof = function(degreesC) {
  const degreesF = (degreesC * 9/5) + 32;
  return Math.round(degreesF*1e1)/1e1;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
