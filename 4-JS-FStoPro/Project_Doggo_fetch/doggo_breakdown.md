### Design

## Components HTML

Interface components of the page:

<!-- h1 - title - Guess the Doggo
p - description - What breed the dog in this image? -->

img src - image -> image of random dog every time the page is refreshed

    - the image seems to be randomly generated using API

3 buttons with answers of dog names on each

    - one button is the right answer
    - other 2 buttons are the wrong answer

## Styling

buttons

    - the correct answer is denoted by green color when the it is clicked
    - the wrong answer is denoted by red color when it is clicked

<!-- The whole content is centered on the page -->

### Interaction

when the page is loaded, briefly a "loading indicator" is shown to wait for the fetch
The page shown random dog image, random answer is inserted into the buttons
when the user clicked on the button the color changes accordingly

## Result

The quiz ended either right or when when the button is clicked

## Miscellaneous

how to know what the answer of the image and match it with the correct word from the list?

    - possible solution: get the answer from the link name that reference the dog's breed
