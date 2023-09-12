import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Endre synlighet</button>
      <p>{visible ? <p>Hallo</p> : <></>}</p>
    </>
  );
}

export default App;
