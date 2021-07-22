import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, { name: "Jiodi", animal: "Cat", breed: "Bengal" }),
    React.createElement(Pet, { name: "Scout", animal: "Dog", breed: "Golden" }),
    React.createElement(Pet, {
      name: "Ringo",
      animal: "Dog",
      breed: "Labrador",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
