const gamesUrl = "https://api.rawg.io/api/games";

fetch(gamesUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createGames(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function createGames(json) {
  const results = json.results;

  const resultsContainer = document.querySelector(".results");

  let html = "";
  results.forEach(function(data) {
    html += `
                <div class="${data.slug}">
                    <h2>${data.name}</h2>
                    <img src="${data.background_image}" alt="${data.name}" />
                </div>
            `;
  });

  resultsContainer.innerHTML = html;
}
