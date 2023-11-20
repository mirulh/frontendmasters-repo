import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// your code goes here
const App = () => {
  return React.createElement("div", { id: "full-layout" }, [
    // <- as you noticed this is indeed an array with bunch of createElement inside
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Kaat",
      breed: "Orange",
    }),
    React.createElement(Pet, {
      animal: "Snail",
      name: "Gary",
      breed: "Swirl",
    }),
    React.createElement(Pet, {
      animal: "Parrot",
      name: "Tua",
      breed: "Cockatoo",
    }),
  ]);
};
// the property inside React.createElement ("element/function expression", {attribute}, "textContent/innerText")

const container = document.getElementById("root"); // take the element by its id "root" represented by container
const root = createRoot(container);
// const root = ReactDOM.createRoot(container); // transform the container element into react property and renamed it root back (it is also the new way of creating root)
root.render(React.createElement(App)); // attach render to root
