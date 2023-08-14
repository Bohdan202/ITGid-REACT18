import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home.js";
import Header from "./Header/Header";
import About from "./About/About";
import Error from "./Error/Error";
import Category from "./Category/Category";
import CategoryDescription from "./Category/CategoryDescription";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cat" element={<Category />} />
          <Route
            path="/cat/:catDescription"
            element={<CategoryDescription />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
