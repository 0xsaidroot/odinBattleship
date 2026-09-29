import { Gameboard } from './Gameboard.js';

describe('Gameboard Placement test suite ', () => {
  (test('The 10*10 GameBoard should exist', () => {
    let board = new Gameboard();
    expect(board.board).toStrictEqual(
      Array(10)
        .fill()
        .map(() => Array(10).fill(0))
    );
  }),
    test('Should place a ship vertically', () => {
      let board = new Gameboard();

      board.placeShipY([1, 2], 3);
      expect(board.board[1][2]).toBe(1);
      expect(board.board[2][2]).toBe(1);
      expect(board.board[3][2]).toBe(1);
    }),
    test('Should not place a ship vertically out of bound', () => {
      let board = new Gameboard();

      board.placeShipY([8, 2], 3);
      expect(board.board[8][2]).toBe(0);
    }),
    test('Should not place a ship vertically on an occupied area', () => {
      let board = new Gameboard();

      board.board[3][2] = 3;
      board.board[4][2] = 3;
      board.board[5][2] = 3;
      board.placeShipY([3, 2], 3);

      expect(board.board[3][2]).toBe(3);
      expect(board.board[4][2]).toBe(3);
      expect(board.board[5][2]).toBe(3);
    }),
    test('Should place a ship horizontally', () => {
      let board = new Gameboard();

      board.placeShipX([1, 2], 3);
      expect(board.board[1][2]).toBe(1);
      expect(board.board[1][3]).toBe(1);
      expect(board.board[1][4]).toBe(1);
    }),
    test('Should not place a ship horizontally out of bound', () => {
      let board = new Gameboard();

      board.placeShipY([1, 8], 3);
      expect(board.board[1][7]).toBe(0);
    }),
    test('Should not place a ship horizontally on an occupied area', () => {
      let board = new Gameboard();

      board.board[3][2] = 3;
      board.board[3][3] = 3;
      board.board[3][4] = 3;
      board.placeShipY([3, 2], 3);

      expect(board.board[3][2]).toBe(3);
      expect(board.board[3][3]).toBe(3);
      expect(board.board[3][4]).toBe(3);
    }));
});
describe.only('Gameboard receive attack test suite', () => {
  test('The receive attack function exist', () => {
    let board = new Gameboard();

    expect(board.receiveAttack()).toBeTruthy();
  });
});
