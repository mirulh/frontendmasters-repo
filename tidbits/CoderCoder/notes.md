### Key takeaways from Jessica Chan @CoderCoder Wordle live coding

LINK > https://youtu.be/PNGgQzw6PQg

Project planning:

1. Plan your project in a note.md. Breakdown all the components and functionality and solved them one at a time
2. Use inspect tools to do research and gain insights of a project or website on the web

CSS tricks:

1. Define the root properties in the CSS that includes main font-styles, color pallettes, and appropriate font-size
2. Label names of the colors then reference the name to something else for ease navigation eg.

:root {
--darkendGreen: #538d4e;  
 --color-correct: var(--darkendGreen)
}

//example usage on a class

.whenWin {

//indicating when class win is called the background color will apply --color-correct instead of "darkendGreen" (for greater clarity)
background-color: var(--color-correct);

}
