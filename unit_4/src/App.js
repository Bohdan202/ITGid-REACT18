import React, {useRef, useState} from 'react';
import "./App.css";

function App() {

  let textInput = useRef();
  let textOut = useRef();

  const [output, setOutput] = useState(null);

  function f1(arg) {
    console.log("f1 work");
  }

  function f2(arg) {
    console.log(arg);
  }

  function showInput(e) {
    //console.log(e.target.value);
    console.log(textInput.current.value);
    setOutput(textInput.current.value);
  }

  return (
    <>
      <section>
        <h2>Button</h2>
        <button onClick={f1}>Push</button>
      </section>
      <section>
        <h2>Double click + mouse move</h2>
        <div className="test" onDoubleClick={() => f2("work")}></div>
      </section>
      <section>
        <h1>Input</h1>
        <input type="text" onInput={showInput} ref={textInput}/>
        <p ref={textOut}></p>
        <h3>{output}</h3>
      </section>
    </>
  );
}

export default App;
