import { Gameboard } from './Gameboard.js';
export class Player {
  constructor(name = null, computer = false) {
    this.name = name;
    this.computer = computer;
    this.board = new Gameboard();
  }
}
