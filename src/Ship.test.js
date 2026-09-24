import { Ship } from './Ship.js';

let ship = new Ship(3);
ship.hit();

describe('The Ship function test', () => {
  (test('hits() should increment the number of hits', () => {
    expect(ship.nOfHits()).toBe(1);
  }),
    test('isSunk should be false when hits doesnot equal length', () => {
      expect(ship.isSunk()).toBeFalsy();
    }),
    test('hits() should be true when hits equal length', () => {
        ship.hit(); ship.hit();
      expect(ship.isSunk()).toBeTruthy();
    }));
});
