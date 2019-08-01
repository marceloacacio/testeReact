import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Paragrafo = props => {
  return <p>Qtd Click {props.item}</p>;
};

function App() {
  const [item, setItem] = useState(0);

  const increment = () => {
    setItem(item + 1);
  };

  return (
    <div className="App">
      <Paragrafo item={item} />
      <button onClick={increment}>Click</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
