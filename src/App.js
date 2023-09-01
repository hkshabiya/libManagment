import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Books from "./components/Books";
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/books" element={<Books />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
