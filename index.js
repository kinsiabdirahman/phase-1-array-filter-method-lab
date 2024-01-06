// Code your solution here
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

// function findMatching(){

// }

function findMatching(drivers, query) {
  return drivers.filter((driver) => {
    const lowercaseDriver = driver.toLowerCase();
    const lowercaseQuery = query.toLowerCase();
    return lowercaseDriver.startsWith(lowercaseQuery);
  });
}

function matchName(drivers, string) {
  return drivers.filter((driver) => driver.name === string);
}
filter(drivers);
//   function fuzzyMatch(drivgroup, initialLetter) {
//     for (const driver of drivgroup) {
//       if (startsLetter(driver, initialLetter)) {
//         console.log(driver.name);
//       }
//     }
//   }

//   function startsLetter(driver, initialLetter) {
//     return driver["name"].toLowerCase().startsWith(initialLetter.toLowerCase());
//   }

// function fuzzyMatch(drivgroup, initialLetter) {
//   for (const driver of drivgroup) {
//     if (startsLetter(driver, initialLetter)) {
//       console.log(driver.name);
//     }
//   }
// }

// function startsLetter(driver, initialLetter) {
//   return driver["name"].toLowerCase().startsWith(initialLetter.toLowerCase());
// }

function fuzzyMatch(drivgroup, initialLetters) {
  const matchingDrivers = drivgroup.filter((driver) =>
    startsLetter(driver, initialLetters)
  );
  return matchingDrivers;
}

function startsLetter(driver, initialLetters) {
  return driver.toLowerCase().startsWith(initialLetters.toLowerCase());
}

fuzzyMatch(drivers, "Sa");
