fetch("https://swapi.co/api/people/1")
  .then(response => response.json())
  .then(result => {
    return Object.keys(result).forEach(el => {
      //creating new elements:
      const lukeSection = document.getElementById("lukeSection");
      const newStat = document.createElement("h2");

      // filling in the newly created with the wanted fetched info:
      const wantedStats = ["name", "height", "mass", "birth_year", "gender"];

      if (wantedStats.includes(el)) {
        newStat.innerText = `${el.toUpperCase()}: ${result[el]} `;
        lukeSection.appendChild(newStat);
      } else {
        null;
      }
    });
  })
  .catch(err => console.log(err));

let darthIsDisplayed = false;

const displayingDarth = () => {
  // condition to make sure that the darth vader info won't overlap itself everytime we hit the button:
  if (!darthIsDisplayed) {
    // fetching the info from the API:
    fetch("https://swapi.co/api/people/4/")
      .then(response => response.json())
      .then(result => {
        // switching background to the "dark force":
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        return Object.keys(result).forEach(el => {
          //creating new elements:
          const darthSection = document.getElementById("darthSection");
          const newStat = document.createElement("h2");

          // filling in the newly created with the wanted fetched info:
          const wantedStats = [
            "name",
            "height",
            "mass",
            "birth_year",
            "gender"
          ];

          if (wantedStats.includes(el)) {
            newStat.innerText = `${el.toUpperCase()}: ${result[el]} `;
            darthSection.appendChild(newStat);
          } else {
            null;
          }
        });
      })
      .catch(err => console.log(err));
  } else {
    null;
  }
  darthIsDisplayed = true;
};

// tracking the button and adding it's functionality:
const btn = document.getElementById("btn");
btn.addEventListener("click", displayingDarth);

/* // Second method to fetch and display data – Also works, but we'd have to replace everything manually:

fetch("https://swapi.co/api/people/1")
  .then(response => response.json())
  .then(result => {
    const lukeStats = document.getElementById("lukeStats");

    const lukeName = document.getElementById("lukeName");
    const lukeBirth = document.getElementById("lukeBirth");
    const lukeGender = document.getElementById("lukeGender");
    const lukeHeight = document.getElementById("lukeHeight");
    const lukeMass = document.getElementById("lukeMass");

    lukeName.innerText = result.name;
    lukeBirth.innerText = `Birth year: ${result.birth_year}`;
    lukeGender.innerText = `Gender: ${result.gender}`;
    lukeHeight.innerText = `Height: ${result.height}`;
    lukeMass.innerText = `Weight: ${result.mass}kg`;
  }); */
