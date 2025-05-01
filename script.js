const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");

let score = 0;
let gameInterval;

function jump() {
    if (character.classList != "jump") {
        character.classList.add("jump");

        setTimeout(function() {
            character.classList.remove("jump");
        }, 400); // Duration of the jump animation (must match CSS)
    }
}

function checkCollision() {
  let characterRect = character.getBoundingClientRect();
  let obstacleRect = obstacle.getBoundingClientRect();

  if (characterRect.bottom >= obstacleRect.top &&
      characterRect.top <= obstacleRect.bottom &&
      characterRect.right >= obstacleRect.left &&
      characterRect.left <= obstacleRect.right) {
        // Collision detected
        clearInterval(gameInterval);
        obstacle.style.animation = "none";  //Stop animation
        alert("Game Over! Your Score: " + score);
  }

  //Score Counter
  score++;
  scoreDisplay.textContent = score;
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

gameInterval = setInterval(checkCollision, 10);