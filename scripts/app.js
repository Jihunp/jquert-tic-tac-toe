// assign player 1 (X) and player 2 (O)
// when an user clicks on a box, we want to see an X or an O
// create our players
const playerOne = "X";
const playerTwo = "O";
// assign our boxes
const $container = $('.container')
const $topLeft = $('#topLeft');
const $topMiddle = $('#topMiddle');
const $topRight = $('#topRight');
const $middleLeft = $('#middleLeft');
const $middleMiddle = $('#middleMiddle');
const $middleRight = $('#middleRight');
const $bottomLeft = $('#bottomLeft');
const $bottomMiddle = $('#bottomMiddle');
const $bottomRight = $('#bottomRight');
// if true
    // player 1 turn
// else
    // player 2 turn
let currentPlayer;
let turn = true;
// $boxedClicked can be pushed to here
let playerOneClicked = [];
let playerTwoClicked = [];
let boxesClicked = [];
// We need to keep track of winning combinations of players
const winningCombinations = [
    // [$topLeft, $topMiddle, $topRight],
    // [$middleLeft, $middleMiddle, middleRight],
    // ...
]
$container.click(function(boxClicked, player) {
    if (turn) {
        currentPlayer = playerOne;
        turn = false;
    } else {
        currentPlayer = playerTwo;
        turn = true;
    }
    // if boxes clicked = specific box (index)
        // not equal to ""
    if (boxesClicked.includes(boxClicked.target)) {
        alert('Illegal Move!');
        return;
    } else {
        boxesClicked.push(boxClicked.target);
    }
    const $boxedClicked = $(boxClicked.target);
    $boxedClicked.html(currentPlayer);
});
// logging the positions of each box
// compare
// if combinations exists in winningCombinations array, then we have a winner! 
let gameBoard = []
// an object with winning combinations
// need to see if player has won or if the game continues
// if player 1 has 3 in a row
    // console.log(player 1 has won)
// else
    // console.log(player 2 has won)
// while there is a false within our box array, then the game continues
    // when the while loop completes, return "tie"
    // break to stop the loop
// scoreboard between player 1 and 2
// ------ for later ---------
// to clean up the above code, use nested for loop
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let $grid = $('grid')
//         $grid.x = j;
//         $grid.y = i;
//         $grid.click(function () {
//             // creating
//         })
//     }
// }