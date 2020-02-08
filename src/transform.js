const groupAdultsByAgeRange = array => {
  // returning an empty object in case a empty array is passed as an argument:
  if (array.length === 0) {
    return {};
  }
  // filtering the array to return only people over 18:
  return (
    array
      .filter(person => {
        return person.age >= 18;
      })
      // creating groups for each age range, then iterating over them and pushing them to the newly created group:
      .reduce((acc, person) => {
        if (person.age >= 18 && person.age <= 20) {
          acc["20 and younger"] = [];
          array
            .filter(p => p.age >= 18 && p.age <= 20)
            .forEach(p => acc["20 and younger"].push(p));
        } else if (person.age > 20 && person.age < 31) {
          acc["21-30"] = [];
          array
            .filter(p => p.age > 20 && p.age < 31)
            .forEach(p => acc["21-30"].push(p));
        } else if (person.age > 30 && person.age < 41) {
          acc["31-40"] = [];
          array
            .filter(p => p.age > 30 && p.age < 41)
            .forEach(p => acc["31-40"].push(p));
        } else if (person.age > 40 && person.age < 51) {
          acc["41-50"] = [];
          array
            .filter(p => p.age > 40 && p.age < 51)
            .forEach(p => acc["41-50"].push(p));
        } else if (person.age >= 51) {
          acc["51 and older"] = [];
          array
            .filter(p => p.age >= 51)
            .forEach(p => acc["51 and older"].push(p));
        }
        return acc;
      }, {})
  );
};

module.exports = { groupAdultsByAgeRange };
