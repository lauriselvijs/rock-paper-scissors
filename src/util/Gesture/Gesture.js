export const compareThreeGestures = (playerGesture, homeGesture) => {
  if (playerGesture === "rock" && homeGesture === "paper") {
    return "YOU LOOSE";
  } else if (playerGesture === "paper" && homeGesture === "rock") {
    return "YOU WIN";
  }

  if (playerGesture === "rock" && homeGesture === "scissors") {
    return "YOU WIN";
  } else if (playerGesture === "scissors" && homeGesture === "rock") {
    return "YOU LOOSE";
  }

  if (playerGesture === "scissors" && homeGesture === "paper") {
    return "YOU WIN";
  } else if (playerGesture === "paper" && homeGesture === "scissors") {
    return "YOU LOOSE";
  }

  if (playerGesture === homeGesture) {
    return "DRAW";
  }
};
