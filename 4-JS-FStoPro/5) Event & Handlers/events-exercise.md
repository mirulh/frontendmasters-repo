## link to the website: https://anjana.dev/javascript-first-steps/2-jsquiz-finished.html

## Exercise

    In the console, on our quiz add event listeners to:

    - Capitalize the text of the true button when it is clicked
    - Change the h1 text to 'hovering' when the mouse moves into the element
    - Change the h1 text to "Quiz.js" when the mouse moves out of the element

## Solution

document.querySelector("#options").addEventListener("click", (e) => {

e.target.innerText = e.target.innerText.toUpperCase();
})

document.querySelector("h1").addEventListener("mouseover", (e) => {
e.target.innerText = "Hovering";
})

document.querySelector("h1").addEventListener("mouseout", (e) => {
e.target.innerText = "Quiz.js";
})
