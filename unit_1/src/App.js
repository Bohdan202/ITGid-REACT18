import "./App.css";

let text = "test variables";

function App() {
  let text2 = "222";

  const style = {
    fontSize: "24px",
    fontStyle: "italic",
    color: "red",
  };

  return (
    <>
      <div>
        <h1 className={style}>app_1</h1>
        <img src="/images/among_us.png" alt="among us" />
      </div>

      <ul>
        <li>Hello</li>
        <li>{text + text2}</li>
      </ul>
    </>
  );
}

export default App;
