# Functional requirements

## Gameplay

6 tries to guess a 5-letter word

Typing in th letter will display the letter in the tile
Backspace will delete letters
Enter will submit guess

Guesses must be a real-word, "in word list"

Guess colors (data-state):

    - gray: "absent", letter not in word
    - yellow: "present", letter in word, but in wrong position
    - green: "correct", letter in word and in right position

Hard mode:

## Design

Tiles 5x6
Virtual keyboard

## Interactions

When typing a letter:

- border of the tile changes to light gray
- blinking in animation with letter
- backspace will remove letter, border letter changes back to dark grey

When submitting guess:

- tiles will flip up and background color will change based on guess
