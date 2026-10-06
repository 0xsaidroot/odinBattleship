import './styles.css';
import { ScreenController } from './ScreenController.js';
import { Player } from './Player.js';
import { Gameboard } from './Gameboard.js';


const body  = document.querySelector('body');
const boardOneCells = document.querySelectorAll('.boardOne .gridCell');
const boardTwoCells = document.querySelectorAll('.boardTwo .gridCell');

let playerOne = new Player('PlayerOne');
let PlayerTwo = new Player('PlayerTwo');

let boardOne = playerOne.board;
let boardTwo = PlayerTwo.board;

boardOne.placeShipX([2,5],3);
boardOne.placeShipX([1,4],5);
boardOne.placeShipX([6,4],3);
boardOne.placeShipY([1,1],2);
boardOne.placeShipY([9,9],1);

boardTwo.placeShipX([2,5],3);
boardTwo.placeShipX([1,4],5);
boardTwo.placeShipX([6,4],3);
boardTwo.placeShipY([1,1],2);
boardTwo.placeShipY([9,9],1);

for (let index = 0; index < boardOneCells.length; index++) {
    let cell = boardOneCells[index];
    let value = boardOne[index];

    cell.textContent = `${}`;
    
}