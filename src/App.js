import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import FinancialSearch from "./components/FinancialSearch";
import "./App.css";
import Output from "./components/Output";

function App() {
  const [ticker, setTicker] = useState("");
  //const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="main-content">
      <Routes>
        <Route
          path="/"
          element={<FinancialSearch ticker={ticker} setTicker={setTicker} />}
        />
        <Route path="/output" element={<Output ticker={ticker} />} />
      </Routes>
    </div>
  );
}

export default App;
