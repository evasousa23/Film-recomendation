function generatePoem(event) {
  event.preventDeFault();

  new Typewriter("#poem", {
    strings: ["Hello", "World"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  poemElement.innerHTML = "saudade";
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
