import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Create from "./components/Create/create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Read />}/>
          {/* <p>dkdk</p> */}
          {/* <div className="App"></div> */}
        {/* <header className="App-header">CRUD APP</header> */}
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </Router>
  );
}

export default App;
