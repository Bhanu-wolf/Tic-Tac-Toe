let boxes = document.querySelectorAll(".box");
// console.log(boxes);
let resetButton = document.querySelector("#resetButton");
// console.log(resetButton);
let newButton = document.querySelector("#newButton");
let messageContainer = document.querySelector("#messageContainer");
let winMessage = document.querySelector("#winMessage");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      turnO = false;
      box.innerText = "O";
    } else {
      turnO = true;
      box.innerText = "X";
    }
    box.disabled = true;
    checkWinner();
  });
});

//function to reset the games

let resetGame = () => {
  turnO = true;
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("winning-box");
  });

  messageContainer.style.display = "none";
 
};

//function to disable boxes once we get the winner
let disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

//functionality to highlight boxes on winning
let highlightWinningBoxes = (pattern) => {
    pattern.forEach((index) => {
      boxes[index].classList.add("winning-box");
    });
  };
  

let checkWinner = () => {
  winPattern.forEach((pattern) => {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 === pos2 && pos2 === pos3 && pos1 !== "") {
      messageContainer.style.display = "flex";
      winMessage.innerText = `Congrulations, Winner is ${pos1}`;
      disableBoxes();
      highlightWinningBoxes(pattern);
      console.log(`${pos1} wins the game`);
    }
  });
};

resetButton.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);
