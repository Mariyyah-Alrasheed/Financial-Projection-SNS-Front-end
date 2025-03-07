import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/STC_logo.png";
import FinancialSearch from "./components/FinancialSearch";
import "./App.css";
import Output from "./components/Output";

function App() {
  const [ticker, setTicker] = useState("");
  const [date, setDate] = useState("");
  

  return (
    <div className="main-content">
      <img src={logo} alt="" />
      <Routes>
        <Route
          path="/"
          element={<FinancialSearch ticker={ticker} setTicker={setTicker} date = {date} setDate = {setDate} />}
        />
        <Route path="/output" element={<Output ticker={ticker} date = {date}/>} />
      </Routes>
    </div>
  );
}

export default App;
