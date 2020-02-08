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

const testArr = [
  { name: "pete", age: 10 },
  { name: "dove", age: 17 },
  { name: "dave", age: 18 },
  { name: "hall", age: 19 },
  { name: "donn", age: 20 },
  { name: "trey", age: 21 },
  { name: "hann", age: 29 },
  { name: "chew", age: 30 },
  { name: "cloe", age: 31 },
  { name: "dart", age: 39 },
  { name: "this", age: 40 },
  { name: "dame", age: 41 },
  { name: "henk", age: 49 },
  { name: "anna", age: 50 },
  { name: "olga", age: 51 },
  { name: "bert", age: 52 },
  { name: "oldd", age: 120 }
];

const testArr2 = [];

const testArr3 = [
  { name: "Anna", age: 31 },
  { name: "John", age: 32 },
  { name: "Hank", age: 60 }
];

console.log("STARTS HERE:", groupAdultsByAgeRange(testArr));

module.exports = { groupAdultsByAgeRange };

/////////////////TICKS ALL THE TESTS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const groupAdultsByAgeRange = array => {
//   const under18 = array.filter(person => person.age < 18);

//   // returning an empty object in case the array doesn't meet the initial criteria
//   if (array.length === 0 || under18.length === array.length) {
//     return {};
//   }

//   return array
//     .filter(person => {
//       return person.age >= 18;
//     })
//     .reduce((acc, person) => {
//       if (person.age >= 18 && person.age <= 20) {
//         acc["20 and younger"] = [];
//         array
//           .filter(p => p.age >= 18 && p.age <= 20)
//           .forEach(p => acc["20 and younger"].push(p));
//       } else if (person.age > 20 && person.age < 31) {
//         acc["21-30"] = [];
//         array
//           .filter(p => p.age > 20 && p.age < 31)
//           .forEach(p => acc["21-30"].push(p));
//       } else if (person.age > 30 && person.age < 41) {
//         acc["31-40"] = [];
//         array
//           .filter(p => p.age > 30 && p.age < 41)
//           .forEach(p => acc["31-40"].push(p));
//       } else if (person.age > 40 && person.age < 51) {
//         acc["41-50"] = [];
//         array
//           .filter(p => p.age > 40 && p.age < 51)
//           .forEach(p => acc["41-50"].push(p));
//       } else if (person.age >= 51) {
//         acc["51 and older"] = [];
//         array
//           .filter(p => p.age >= 51)
//           .forEach(p => acc["51 and older"].push(p));
//       }
//       return acc;
//     }, {});
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const groupAdultsByAgeRange = array => {
//   const arrayIntoAgeRanges = {
//     "20 and younger": [],
//     "21-30": [],
//     "31-40": [],
//     "41-50": [],
//     "51 and older": []
//   };

//   const under18 = array.filter(person => person.age < 18);

//   // returning an empty object in case the array doesn't meet the initial criteria
//   if (array.length === 0 || under18.length === array.length) {
//     return {};
//   }

//   return array
//     .filter(person => {
//       return person.age >= 18;
//     })
//     .reduce((acc, person) => {
//       if (person.age >= 18 && person.age <= 20) {
//         acc["20 and younger"].push(person);
//       } else if (person.age > 20 && person.age < 31) {
//         acc["21-30"].push(person);
//       } else if (person.age > 30 && person.age < 41) {
//         acc["31-40"].push(person);
//       } else if (person.age > 40 && person.age < 51) {
//         acc["41-50"].push(person);
//       } else if (person.age >= 51) {
//         acc["51 and older"].push(person);
//       }
//       // console.log("acc:", acc);
//       return acc;
//     }, arrayIntoAgeRanges);
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  const arrayteste = {
//   "20 and younger": [{ name: "pete", age: 20 }],
//   "21-30": [],
//   "31-40": [],
//   "41-50": [
//     { name: "maka", age: 45 },
//     { name: "lolo", age: 47 }
//   ],
//   "51 and older": []
// };

// console.log(arrayteste.forEach(el => console.log(el)));

/* const groupAdultsByAgeRange = array => {
  const arrayIntoAgeRanges = {
    "20 and younger": [],
    "21-30": [],
    "31-40": [],
    "41-50": [],
    "51 and older": []
  };
  if (array.length === 0) {
    return {};
  } else {
    return array
      .filter(person => {
        return person.age >= 18;
      })
      .reduce((acc, person) => {
        console.log("person is:", person);
        // console.log("person age:", person.age);
        if (person.age >= 18 && person.age <= 20) {
          acc["20 and younger"].push(person);
        } else if (person.age > 20 && person.age < 31) {
          acc["21-30"].push(person);
        } else if (person.age > 30 && person.age < 41) {
          acc["31-40"].push(person);
        } else if (person.age > 40 && person.age < 51) {
          acc["41-50"].push(person);
        } else if (person.age >= 51) {
          acc["51 and older"].push(person);
        }
        console.log("acc is now: ", acc);
        console.log("acc length is now: ", acc["20 and younger"].length);

        acc[value].length;

        // return acc[value] > 0 ? acc : null;
        return acc;
      }, arrayIntoAgeRanges);
    // .filter(arr => arr.length > 0);
    console.log("arraysByAge: ", arraysByAge);
    // return arraysByAge.forEach(arr => console.log(arr));
  }
}; */
