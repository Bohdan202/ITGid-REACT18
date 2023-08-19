import './App.css';
import React from 'react';
import { useState, useRef } from 'react';


function App() {
  let count4 = 0;
  let select6 = useRef();
  let block7 = useRef();
  let inValue = useRef();
  let input10 = useRef();

  const [attribute, setAttribute] = useState(0);
  const [value, setValue] = useState();
  const [input, setInput] = useState("");
  const [range, setRange] = useState(null);

  function task1() {
    console.log("task2");
  }
  function task2(e) {
    e.target.classList.add("active");
  }
  function task3(e) {
    console.log(e.target.value);
  }
  function task4() {
    return console.log(count4++);
  }
  function task5(e) {
    if (e.target.checked) {
      setAttribute(e.target.getAttribute("currentValue"));
    } else {
      setAttribute(0);
    }
  }
  function task6() {
    setValue(select6.current.value);
  }
  function task7() {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let randColor = `rgb(${r},${g},${b})`;
      
      return block7.current.style.backgroundColor = randColor;
  }
  function task8() {
    let strValue = inValue.current.value;
    let last = strValue.charAt(strValue.length-1);
    let reg = /^\d+$/;
    let str = "";
    if(!reg.test(last)){
      str += '1';
    }
      else{
      str += '0';
    }
    return setInput((prev) => prev + str);
  }
  function task9(e) {
    return setRange(e.target.value);
  }
  let ar10 = [5, 6, 7];
  function task10() {
    let inputValue = +input10.current.value;
    ar10.push(inputValue);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5}/>
        <div className="out-5">{attribute}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={select6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{value}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={block7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={inValue}></input>
        <div className="out-8">{input}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9">{range}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={input10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
