import { useState } from "react";
import Button from "@mui/material/Button";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Example from "./Example";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button>Click Me</Button>
      <Example />
    </div>
  );
}

export default App;
