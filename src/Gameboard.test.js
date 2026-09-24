import { Gameboard } from './Gameboard.js';

let testBoard = new Gameboard();

describe('Gameboard test suite ', () => {
  (test('The 10*10 GameBoard should exist', () => {
    expect(testBoard.board).toStrictEqual(
      Array(10)
        .fill()
        .map(() => Array(10).fill(0))
    );
  }),
    test('Should place a ship vertically', () => {
      let board = new Gameboard();
      expect(board.placeShipY([1, 2], 3)).toBe(testBoard);
    }),
    test('Should place a ship horizontally', () => {
      testBoard.placeShipX([3, 1]);
    }));
});
