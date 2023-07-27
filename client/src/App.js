import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
