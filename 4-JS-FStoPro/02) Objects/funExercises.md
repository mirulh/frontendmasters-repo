## Complete the tasks in developer console of the website

## Website tictactoe link

https://anjana.dev/javascript-first-steps/1-tictactoe.html

## Tasks

1.  Let's play Tic Tac Toe!

    Set up the players
    Create a players array containing 2 objects, one representing each player
    Each object should store the player's name and symbol (X or O)
    Display each player's name in the appropriate element in the page

2.  Play!

    Take turns placing symbols in the board
    On each turn:
    Retrieve the square you want to play in
    Set the square's text to your player's symbol

    ps. to select all squares either one of these:

    - board.children[1] => selects the id board and all of its children

    - const selectTiles = document.querySelectorAll(".square").textContent = players[1].symbol => selects all squares
