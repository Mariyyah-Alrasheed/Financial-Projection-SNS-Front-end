import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import the CSS file

const FinancialSearch = ({ ticker, setTicker }) => {
  const [apiSource, setApiSource] = useState("Yahoo");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome to SNS</h1>

      <label>Choose Company</label>
      <select
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        className="dropdown"
      >
        <option value="AAPL">Apple (AAPL)</option>
        <option value="GOOGL">Google (GOOGL)</option>
        <option value="MSFT">Microsoft (MSFT)</option>
      </select>

      <label>The Source</label>
      <select
        value={apiSource}
        onChange={(e) => setApiSource(e.target.value)}
        className="dropdown"
      >
        <option value="Yahoo">Yahoo Finance</option>
      </select>
      <label>The Date</label>
      <input
        className="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="submit-button" onClick={() => navigate("/output")}>
        Predict
      </button>
    </div>
  );
};

export default FinancialSearch;
