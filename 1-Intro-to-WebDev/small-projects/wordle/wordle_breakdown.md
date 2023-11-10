## < Project Planning & Functional Requirement >

## User Interaction & Website Flow

- The website is loaded when the user open the page
  -- There are 5 x 6 tiles centered on the screen
  -- The tiles is empty

- when the user press a key on the keyboard the tiles registered the input sequentially
  -- The tiles only allowed 5 letter per row
  -- The tiles does not allow non alphabet keys except backspace and enter

- When user press enter, the input would be evaluated
  -- If it is a valid 5-letter english word the tiles will be colored green, yellow or gray accordingly

  -- If it is non-valid word the system will indicates user to try again

- If valid word, each tiles of the letter will be colored according to this:
  -- Green if it's in the right place (color-correct)
  -- Yellow if it's present but in the wrong place (color-present)
  -- Gray if it's absent from today's word (color-absent)

- User only allowed to proceed to the next row if submitted a 5 letter valid word
  -- The game ends after 6 attempts, and the result would be prompt at the end
  -- The result is either: "you guessed the word", "or you did not guessed the word: word"

## Components HTML

from top,

- h1 -> for the header of the word Wordle
- div -> for the tiles of 30 and 5 for each row

## Components CSS

for cs html,

- border-bottom -> separation line under header h1
- font-style:
  -- font style inside tiles: libre-franklin
  -- font style of header: TBD

for js,

- add class .correct -> green background color (#538d4e;)
- add class .present -> yellow background color (#b59f3b;)
- add class .absent -> gray background color (##3a3a3c;)

animation,

- add some kind of animation other than flip animation

## Interactive Elements Js

data fetching,

- needed api that fetch word of the day
- needed api list of valid words

interactivity,

- addEventListener, keydown -> to detect pressed key
- if key is not letter and backspace and enter -> do nothing
- if guesses != 5 letters -> prompt incomplete guess!
- if word is guess correctly -> prompt "you win"

## Miscellaneous

for my flair and my own touch:

- make the tiles has slight rounded corner
- add my own animation style other then flip
