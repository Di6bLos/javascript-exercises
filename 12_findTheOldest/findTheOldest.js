const findTheOldest = (arr) => {
    const currentYear = new Date().getFullYear();

    arr.forEach(person => {
      if (person.hasOwnProperty("yearOfDeath")) {
        for (let {} in person) {
            person.yearsLived = person.yearOfDeath - person.yearOfBirth;
          };
      } else {
          person.yearsLived = currentYear - person.yearOfBirth;
      };
  });
      
     const oldest = arr.reduce((a,b)=> a.yearsLived > b.yearsLived ? a : b);
     return oldest;
  };


// Do not edit below this line
module.exports = findTheOldest;
