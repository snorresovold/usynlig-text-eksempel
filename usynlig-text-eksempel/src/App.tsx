import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(true);
  const [color, setColor] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Endre synlighet</button>
      <button onClick={() => setColor(!color)}>Endre farge</button>
      <p>{visible ? <p>Hallo</p> : <></>}</p>
      <p>
        {color ? (
          <p style={{ color: "blue" }}>Hallo</p>
        ) : (
          <p style={{ color: "red" }}>Hallo</p>
        )}
      </p>
    </>
  );
}

export default App;
