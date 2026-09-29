import { Ship } from './Ship.js';

export class Gameboard {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
  }
  placeShipY(coord, length) {
    let ship = new Ship(length);
    let row = coord[0];
    let column = coord[1];

    for (let i = row; i <= row + length - 1; i++) {
      if (
        this.board[i][column] !== 0 ||
        row < 0 ||
        column < 0 ||
        column > 9 ||
        row + length > 9
      ) return;
      this.board[i][column] = 1;
    }
  }
  placeShipX(coord, length) {
    let ship = new Ship(length);
    let row = coord[0];
    let column = coord[1];

    for (let i = column; i <= column + length - 1; i++) {
      if (
        this.board[row][i] !== 0 ||
        row < 0 ||
        column < 0 ||
        column  + length > 9 ||
        row > 9
      ) return;
      this.board[row][i] = 1;
    }
  }
  receiveAttack(){
    
  }
}

const game = new Gameboard();

