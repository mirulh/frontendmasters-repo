const tiles = document.querySelectorAll(".tile");

const displayWinner = document.querySelector(".winner");

let currentPlayer = 0;

const maxRound = 9;

function insertSelection(selection) {
  if (currentPlayer % 2 == 0) {
    selection.target.innerText = "X";
    currentPlayer++;
    checkWins();
    checkRound();
  } //
  else {
    selection.target.innerText = "O ";
    currentPlayer++;
    checkWins();
    checkRound();
  }
}

// function freezeTiles() {
//   console.log(tiles[0].preventDefault());
//   // tiles[1].removeEventListener("click", init());
//   // console.log(tiles[0].classList.add("freeze"));
//   // tiles[currentPlayer].classList.add("freeze");
//   // console.log(tiles[currentPlayer].classList.add("freeze"));
// }

function checkRound() {
  if (currentPlayer === maxRound && displayWinner.innerText === "Winner:") {
    // displayWinner.innerText = `Winner: DRAW`;
    // document.querySelector(".winner").append(" DRAW");
    displayWinner.append(" DRAW");

    document.querySelector(".game").style.pointerEvents = "none";
    return;
  }
}

function checkWins() {
  if (
    (document.querySelector(".tile1").innerText === "X" &&
      document.querySelector(".tile2").innerText === "X" &&
      document.querySelector(".tile3").innerText === "X") ||
    //
    (document.querySelector(".tile4").innerText === "X" &&
      document.querySelector(".tile5").innerText === "X" &&
      document.querySelector(".tile6").innerText === "X") ||
    //
    (document.querySelector(".tile7").innerText === "X" &&
      document.querySelector(".tile8").innerText === "X" &&
      document.querySelector(".tile9").innerText === "X") ||
    //
    (document.querySelector(".tile1").innerText === "X" &&
      document.querySelector(".tile4").innerText === "X" &&
      document.querySelector(".tile7").innerText === "X") ||
    //
    (document.querySelector(".tile2").innerText === "X" &&
      document.querySelector(".tile5").innerText === "X" &&
      document.querySelector(".tile8").innerText === "X") ||
    //
    (document.querySelector(".tile3").innerText === "X" &&
      document.querySelector(".tile6").innerText === "X" &&
      document.querySelector(".tile9").innerText === "X") ||
    //
    (document.querySelector(".tile3").innerText === "X" &&
      document.querySelector(".tile5").innerText === "X" &&
      document.querySelector(".tile7").innerText === "X") ||
    //
    (document.querySelector(".tile1").innerText === "X" &&
      document.querySelector(".tile5").innerText === "X" &&
      document.querySelector(".tile9").innerText === "X")
  ) {
    displayWinner.append(" Player1");
    document.querySelector(".game").style.pointerEvents = "none";
    return;
  } //
  else if (
    (document.querySelector(".tile1").innerText === "O" &&
      document.querySelector(".tile2").innerText === "O" &&
      document.querySelector(".tile3").innerText === "O") ||
    //
    (document.querySelector(".tile4").innerText === "O" &&
      document.querySelector(".tile5").innerText === "O" &&
      document.querySelector(".tile6").innerText === "O") ||
    //
    (document.querySelector(".tile7").innerText === "O" &&
      document.querySelector(".tile8").innerText === "O" &&
      document.querySelector(".tile9").innerText === "O") ||
    //
    (document.querySelector(".tile1").innerText === "O" &&
      document.querySelector(".tile4").innerText === "O" &&
      document.querySelector(".tile7").innerText === "O") ||
    //
    (document.querySelector(".tile2").innerText === "O" &&
      document.querySelector(".tile5").innerText === "O" &&
      document.querySelector(".tile8").innerText === "O") ||
    //
    (document.querySelector(".tile3").innerText === "O" &&
      document.querySelector(".tile6").innerText === "O" &&
      document.querySelector(".tile9").innerText === "O") ||
    //
    (document.querySelector(".tile3").innerText === "O" &&
      document.querySelector(".tile5").innerText === "O" &&
      document.querySelector(".tile7").innerText === "O") ||
    //
    (document.querySelector(".tile1").innerText === "O" &&
      document.querySelector(".tile5").innerText === "O" &&
      document.querySelector(".tile9").innerText === "O")
  ) {
    displayWinner.append(" Player2");
    document.querySelector(".game").style.pointerEvents = "none";
    return;
  }
}

function init() {
  document.querySelector(".game").addEventListener("click", function (event) {
    // console.log(event.target);
    // event.target.innerText = "X";
    insertSelection(event);
  });
}

init();
