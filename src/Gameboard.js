import { Ship } from './Ship.js';

export class Gameboard {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
  }
  placeShipY(coord, length) {
    let ship = new Ship(length);
    for (let i = coord[0]; i <= coord[0] + length; i++) {
      if (this.board[i][coord[1]] !== 0 || ) return;
      this.board[i][coord[1]] = 1;
    }
    return this.board;
  }
}

const game = new Gameboard();
