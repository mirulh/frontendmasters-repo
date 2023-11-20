## Purpose of this code directory

- The code in this directory serves to let the user know and understand the "behind the scene" of how react works in practical sense but in truth this methods of writing react code is not recommended anymore

- Instead we will be using JSX to write react code

Why do we need to npm install prettier in Prettier extension already installed

-> https://stackoverflow.com/questions/61925900/what-is-the-difference-between-installing-prettier-as-a-npm-package-and-installi

- It is important to use npm install to install the same dependency so the codebase did not break when working in a team

## NPM Install Guide

- npm command

  -- npm install --save-dev prettier@2.7.1 (whatever version you want)

f you want to save a package as a development-only dependency, you can do so by using the --save-dev or -D flag

- short form version

  -- npm i -D prettier

## What does dependency mean?

What is a software dependency? A software dependency is a relationship between software components where one component relies on the other to work properly.

## Adding Prettier format script

-- cli command for package.json

    -- "format": "prettier --write \"src/**/*.{js,jsx}\"",

-- How to use:

    -- in the terminal run: 
        
        --npm run format

(if the result grayed out - it does not ran successfully, nothing change
else - the command ran successfully)

Explanation: 

This script command appears to use Prettier, a code formatting tool, to automatically format JavaScript and JSX files within the src directory and its subdirectories. The --write flag means that Prettier will directly modify the files to adhere to its formatting rules, improving their consistency and readability. The pattern "src/**/*.{js,jsx}" specifies that Prettier should target all JavaScript and JSX files (*.js and *.jsx) within the src directory and its subfolders for formatting.

reference: https://frontendmasters.com/courses/complete-react-v8/npm-prettier-setup/

## Why do we need gitignore file

- gitignore file is useful: it tells Git exactly which files to ignore and never track.