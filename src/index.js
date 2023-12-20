function displayFilm(response) {
  new Typewriter("#film", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

function generateFilm(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a3af3t89ob96e0f9a620e92909b7a4bf";
  let context =
    "You are a AI incredible expert cinematic and love recomend films. You mission is to generate  recomendations with a description about the film. Make sure to follow the user instructions. Include the film title in <h1> ";
  let prompt = `User instructions:Generate a film recomendations about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  let filmElement=document.querySelector("#film")
filmElement.classList.remove("hidden")
filmElement.innerHTML = ` <div class="generating">⏱️Generating a film recomendations about ${instructionsInput.value}</div>`;



  axios.get(apiUrl).then(displayFilm);

 

}

let filmFormElement = document.querySelector("#film-generator");
filmFormElement.addEventListener("submit", generateFilm);
