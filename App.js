import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbaar from "./components/Navbaar"
import Home from "./components/Home"
import Register from "./components/Register"
import Edit from "./components/Edit"
import Details from "./components/Details"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbaar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/view/:id" element={<Details/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
