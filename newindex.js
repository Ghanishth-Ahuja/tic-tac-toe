let playerNameAndResultArea = document.getElementById("player");
let allX0Divs = Array.from(document.querySelectorAll(".box"));
let finishButton = document.querySelector(".button");
let currentPlayer = "X";
let ClickedDivArray = ["", "", "", "", "", "", "", "", ""];
let winninPositionsArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
initialiseGame();

finishButton.addEventListener("click", initialiseGame);
//initialising the game
function initialiseGame() {
  finishButton.classList.add("hidden");
  allX0Divs.forEach((divs) => {
    divs.classList.remove("won"); // or divs.classList=`box box-${i}`
    divs.textContent = "";
  });
  playerNameAndResultArea.textContent = "Current Player - X";
}

//toggling the player
function toggleCurrentPlayer() {
  if (currentPlayer === "X") currentPlayer = "0";
  else currentPlayer = "X";
  playerNameAndResultArea.textContent = `Current Player - ${currentPlayer}`;
}

function addToClickedDivArray(divNumber) {
  allX0Divs[divNumber].textContent = currentPlayer;
  ClickedDivArray[divNumber] = currentPlayer;
  toggleCurrentPlayer();
  //kya player jeeta?
  checkIfTheGameIsOverOrNot();
}
allX0Divs.forEach((singleX0Div, divNumber) => {
  singleX0Div.addEventListener("click", () => addToClickedDivArray(divNumber));
});

//checkIfTheGameIsOverOrNot
function checkIfTheGameIsOverOrNot() {
  let winner = "";
  let positionsFilled = 0;

  for (let i = 0; i < winninPositionsArray.length; i++) {
    singleWinningPosition = winninPositionsArray[i];
    if (
      !!ClickedDivArray[singleWinningPosition[0]] &&
      !!ClickedDivArray[singleWinningPosition[1]] &&
      !!ClickedDivArray[singleWinningPosition[2]] &&
      ClickedDivArray[singleWinningPosition[0]] ===
        ClickedDivArray[singleWinningPosition[1]] &&
      ClickedDivArray[singleWinningPosition[1]] ===
        ClickedDivArray[singleWinningPosition[2]]
    ) {
      winner = ClickedDivArray[singleWinningPosition[0]];
      playerNameAndResultArea.textContent = `Winner is Player - ${winner}`;
      allX0Divs[singleWinningPosition[0]].classList.add("won");
      allX0Divs[singleWinningPosition[1]].classList.add("won");
      allX0Divs[singleWinningPosition[2]].classList.add("won");
      finishButton.classList.remove("hidden");
      allX0Divs.forEach((singlediv) => {
        singlediv.style.pointerEvents = "none";
      });
    }
  }
  ClickedDivArray.forEach((player) => {
    if (!!player) positionsFilled++;
  });
  if (positionsFilled === 9) {
    playerNameAndResultArea.textContent = "Game Tied";
    finishButton.classList.remove("hidden");
  }
  // else console.log("Abhi koi ni jeeta, khelte ro");
}
