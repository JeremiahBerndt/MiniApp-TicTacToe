const clickBox = (event) => {
  //why not hoisted to the top?
  Player.turn++;
  let mark = (Player.turn % 2 === 0) ? 'X' : 'O';
  console.log('mark:', mark)

  event.target.innerHTML = mark;
  addToModelGrid(event.target, mark)
}

const addToModelGrid = (target, marked) => {
  let rows = ['row1', 'row2', 'row3']
  rows.forEach(item => {
    if (item === target.parentElement.className) {
      let rowIndex = item[2];
      let colIndex = 0;
      while (target.previousSibling !== null) {
        colIndex++
      }
      boardGrid[rowIndex][colIndex] = marked;
      console.log('the board', boardGrid)
      return;
    }
  })
}

class Player {
  constructor(turn, name) {
    this.turn = 0;
    this.name = name;
    this.wins = 0;
  }

}

const player1 = new Player;



//we have a player 1 proto that has the ability to create X's
//we also want to keep track of the current status of the board somewhere
//we have a player 2 that can create O's
//we can base player 1 or player 2's turn off of the odd or evens
//break pieces into small functions



const boardDivs = document.querySelectorAll(".box");
const boardGrid = [[],[],[]];

const boxListener = (() => {
  console.log('gameboard:', boardGrid)
  boardDivs.forEach((box) => {
    box.addEventListener("click", clickBox)
  })
})(window);