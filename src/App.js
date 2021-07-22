import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Jiodi" animal="Cat" breed="Bengal" />
      <Pet name="Scout" animal="Dog" breed="Golden" />
      <Pet name="Scout" animal="Dog" breed="Golden" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
