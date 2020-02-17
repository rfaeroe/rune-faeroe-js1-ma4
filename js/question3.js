let Url = "https://api.rawg.io/api/games/4200";

fetch(Url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createGameDetails(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function createGameDetails(data) {
  const bgImage = document.querySelector(".image");
  bgImage.style.backgroundImage = `url('${data.background_image}')`;

  const nameTitle = document.querySelector("h1");
  nameTitle.innerText = data.name;

  const description = document.querySelector(".description");
  description.innerHTML = data.description;
}
