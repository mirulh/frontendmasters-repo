import { createRoot } from "react-dom";
import Pet from "./Pet";

// your code goes here
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Kaat" animal="Cat" breed="Orange" />
      <Pet name="Gary" animal="Snail" breed="Swirl" />
      <Pet name="Tua" animal="Parrot" breed="Cockatoo" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
