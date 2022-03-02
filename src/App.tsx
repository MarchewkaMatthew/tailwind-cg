import React from "react";
import "./App.css";
import { Button } from "./components/button/Button";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button onClick={() => window.alert("button clicked")}>Click me!</Button>
    </div>
  );
}

export default App;
