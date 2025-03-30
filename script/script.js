document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".switch-knop");

  buttons.forEach(button => {
      button.addEventListener("click", ButtonClick);
  });

  function ButtonClick(event) {
      let ingredientId = event.target.getAttribute("ingredient");
      let button = event.target;
      toggleIngredient(ingredientId, button);
  }

  function toggleIngredient(ingredientId, button) {
      let ingredient = document.getElementById(ingredientId);

      if (ingredient.style.display === "none" || ingredient.style.display === "") {
          ingredient.style.display = "block";
      } else {
          ingredient.style.display = "none";
      }

      button.classList.toggle("actief");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const musicButton = document.querySelector(".music-button");
  const music = document.getElementById("background-music");

  let isMusicPlaying = false;
  music.pause(); 

  musicButton.addEventListener("click", MusicSwitch);

  function MusicSwitch() {
      if (isMusicPlaying) {
          music.pause();
          musicButton.classList.remove("actief");
      } else {
          music.play();
          musicButton.classList.add("actief");
      }
      isMusicPlaying = !isMusicPlaying;
  }
});
