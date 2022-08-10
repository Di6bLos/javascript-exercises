const fibonacci = (n) => {
  
    const arr = [1,1];
     if (n > 0) {
       for (let i = 2; i < n; i++) {
       arr[i] = arr[i-1] + arr[i-2];
     };} else {
       return "OOPS"
     }
     
     return arr.at(-1);
   };
   
// Do not edit below this line
module.exports = fibonacci;
