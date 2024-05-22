import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import react from "react";

let id = 2;
function App() {
  const [coment, setComent] = useState([
    {
      id: 1,
      coment: "this was nice watching u",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  function AddComent() {
    return setComent([
      ...coment,
      {
        id: id++,
        coment: inputValue,
      },
    ]);
  }

  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>

      <br></br>
      <button onClick={AddComent}></button>
      {coment.map((com) => (
        <DisplayComent coment={com.coment} />
      ))}
    </div>
  );
}

function DisplayComent({ coment }) {
  return (
    <>
      <div>{coment}</div>
    </>
  );
}

export default App;
