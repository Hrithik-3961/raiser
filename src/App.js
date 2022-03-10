import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Connect from "./Connect";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Connect />} />
          <Route exact path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
