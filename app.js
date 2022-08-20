const searchButton = document.getElementById("search");
searchButton.addEventListener("click", filterDigimonByName);
getDigimon();

function getDigimon() {
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((data) => {
      return data.json();
    })
    .then((dataAsObject) => {
      const digimons = dataAsObject.filter((element, index) => {
        return index <= 20;
      });

      displayDigimon(digimons);
    })
    .catch((err) => {
      console.log("Error : cant find digimond", err);
    });
}

function displayDigimon(digimons) {
  let digimonToDisplay = "";
  digimons.map((digimon) => {
    digimonToDisplay += `<div class=card>
        <h1 class="name">${digimon.name}</h1>
        <img src=${digimon.img} alt="img" class="image">
        <p>${digimon.level}<p>
        </div>
        `;
    document.getElementById("cards").innerHTML = digimonToDisplay;
  });
}

function filterDigimonByName() {
  let digimonName = document.getElementById("name").value;
  console.log(digimonName);
  fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
    .then((data) => {
      return data.json();
    })
    .then((digimons) => {
      displayDigimon(digimons);
    })
    .catch((err) => {
      console.log("Error : cant find digimond", err);
    });
}
