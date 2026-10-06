import { Ship } from './Ship.js';

export class Gameboard {
  constructor() {
    this.board = [];

    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i].push({ value: null, ship: null });
      }
    }
    this.fleet = [];
  }
  placeShipY(coord, length) {
    let ship = new Ship(length);
    let row = coord[0];
    let column = coord[1];

    for (let i = row; i <= row + length - 1; i++) {
      if (
        this.board[i][column].value !== null ||
        row < 0 ||
        column < 0 ||
        column > 9 ||
        row + length > 9
      )
        return;
      this.board[i][column].value = 1;
      this.board[i][column].ship = ship;
      this.fleet.push(ship);
    }
  }
  placeShipX(coord, length) {
    let ship = new Ship(length);
    let row = coord[0];
    let column = coord[1];

    for (let i = column; i <= column + length - 1; i++) {
      if (
        this.board[row][i].value !== null ||
        row < 0 ||
        column < 0 ||
        column + length > 9 ||
        row > 9
      ) {
        return;
      }
      this.board[row][i].value = 1;
      this.board[row][i].ship = ship;
      this.fleet.push(ship);
    }
  }
  receiveAttack(coord) {
    let row = coord[0];
    let column = coord[1];

    if (row < 0 || column < 0 || column > 9 || row > 9) return;
    else if (this.board[row][column].value === 1) {
      let ship = this.board[row][column].ship;
      ship.hit();
      this.board[row][column].value = 'hit';
    } else {
      this.board[row][column].value = 'miss';
    }
  }
  allShipSunk() {
    for (let ship of this.fleet) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }
}

let board = new Gameboard();
board.placeShipX([1, 1], 1);
board.placeShipX([1, 2], 1);
board.placeShipX([1, 3], 1);

board.receiveAttack([1, 1]);
board.receiveAttack([1, 2]);
board.receiveAttack([1, 3]);
board.allShipSunk();
