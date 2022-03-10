import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Connect from "./Connect";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Connect />} />
          <Route exact path="home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
