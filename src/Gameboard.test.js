import { Gameboard } from './Gameboard.js';

describe('Gameboard Placement test suite ', () => {
  (test('The 10*10 GameBoard should exist', () => {
    let board = new Gameboard();
    expect(board.board).toStrictEqual(
      Array(10)
        .fill()
        .map(() => Array(10).fill({ value: null, ship: null }))
    );
  }),
    test('Should place a ship vertically', () => {
      let board = new Gameboard();

      board.placeShipY([1, 2], 3);
      expect(board.board[1][2].value).toBe(1);
      expect(board.board[2][2].value).toBe(1);
      expect(board.board[3][2].value).toBe(1);
    }),
    test('Should not place a ship vertically out of bound', () => {
      let board = new Gameboard();

      board.placeShipY([8, 2], 3);
      expect(board.board[8][2].value).toBeNull();
    }),
    test('Should not place a ship vertically on an occupied area', () => {
      let board = new Gameboard();

      board.board[3][2].value = 3;
      board.board[4][2].value = 3;
      board.board[5][2].value = 3;
      board.placeShipY([3, 2], 3);

      expect(board.board[3][2].value).toBe(3);
      expect(board.board[4][2].value).toBe(3);
      expect(board.board[5][2].value).toBe(3);
    }),
    test('Should place a ship horizontally', () => {
      let board = new Gameboard();

      board.placeShipX([1, 2], 3);
      expect(board.board[1][2].value).toBe(1);
      expect(board.board[1][3].value).toBe(1);
      expect(board.board[1][4].value).toBe(1);
    }),
    test('Should not place a ship horizontally out of bound', () => {
      let board = new Gameboard();

      board.placeShipX([1, 8], 3);
      expect(board.board[1][7].value).toBeNull();
    }),
    test('Should not place a ship horizontally on an occupied area', () => {
      let board = new Gameboard();

      board.board[3][2].value = 3;
      board.board[3][3].value = 3;
      board.board[3][4].value = 3;
      board.placeShipY([3, 2], 3);

      expect(board.board[3][2].value).toBe(3);
      expect(board.board[3][3].value).toBe(3);
      expect(board.board[3][4].value).toBe(3);
    }));
});
describe('Gameboard receive attack test suite', () => {
  (test('Attacks an empty cell and marks it ', () => {
    let board = new Gameboard();
    board.receiveAttack([0, 0]);
    expect(board.board[0][0].value).toBe('miss');
  }),
    test('Attack a ship  block and mark it', () => {
      let board = new Gameboard();
      board.placeShipX([1, 1], 3);
      board.receiveAttack([1, 1]);
      expect(board.board[1][1].value).toBe('hit');
    }),
    test('Attack all ship block and mark it', () => {
      let board = new Gameboard();
      board.placeShipY([1, 1], 3);
      board.receiveAttack([1, 1]);
      board.receiveAttack([2, 1]);
      board.receiveAttack([3, 1]);
      expect(board.board[1][1].value).toBe('hit');
      expect(board.board[2][1].value).toBe('hit');
      expect(board.board[3][1].value).toBe('hit');
    }),
    test('Doesnt attack cells out of bound', () => {
      let board = new Gameboard();
      expect(board.receiveAttack([10, 1])).toBeUndefined();
    }),
    test('Doesnt attack an already marked cell', () => {
      let board = new Gameboard();
      board.placeShipY([1, 1], 3);
      board.receiveAttack([1, 1]);
      board.receiveAttack([2, 1]);
      expect(board.receiveAttack([1, 1])).toBeUndefined();
      expect(board.receiveAttack([2, 1])).toBeUndefined();
    }));
});
describe('Gameboard allShipSunk test suite', () => {
  (test('The function returns true if all the ships sunk', () => {
    let board = new Gameboard();
    board.placeShipX([1, 1], 1);
    board.placeShipX([1, 2], 1);
    board.placeShipX([1, 3], 1);
    board.receiveAttack([1, 1]);
    board.receiveAttack([1, 2]);
    board.receiveAttack([1, 3]);
    expect(board.allShipSunk()).toBeTruthy();
  }),
    test("The function returns false if all the ships  aren't sunk", () => {
      let board = new Gameboard();
      board.placeShipX([1, 1], 1);
      board.placeShipX([1, 2], 1);
      board.placeShipX([1, 3], 1);
      board.receiveAttack([1, 1]);
      board.receiveAttack([1, 2]);
      expect(board.allShipSunk()).toBeFalsy();
    }));
});
