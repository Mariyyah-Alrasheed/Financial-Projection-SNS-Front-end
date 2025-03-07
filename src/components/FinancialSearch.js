import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./Financial.css";

const FinancialSearch = ({ ticker, setTicker , date, setDate}) => {
  const [apiSource, setApiSource] = useState("Yahoo");
  // const [date, setDate] = useState("");
  const [selectedValue, setSelectedValue] = useState("Investor");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="welcome-msg">
        <h1>Welcome to Fin!</h1>
        <p>How would you like to see the data?</p>
      </div>
      <div className="radio-buttons">
        <span>
          <input
            type="radio"
            id="investor"
            name="user_type"
            value="Investor"
            checked={selectedValue === "Investor"}
            onChange={() => handleRadioChange("Investor")}
          />
          <label for="investor">Investor</label>
        </span>
        <span>
          <input
            type="radio"
            id="speculater"
            name="user_type"
            value="Speculater"
            checked={selectedValue === "Speculater"}
            onChange={() => handleRadioChange("Speculater")}
          />
          <label for="speculater">Speculater</label>
        </span>
      </div>
      <div className="background">
        <div className="search-container">
          <label>Choose a Company</label>
          <select
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className="dropdown"
          >
            <option value="AAPL">Apple (AAPL)</option>
            <option value="GOOGL">Google (GOOGL)</option>
            <option value="MSFT">Microsoft (MSFT)</option>
          </select>

          <label>Select source</label>
          <select
            value={apiSource}
            onChange={(e) => setApiSource(e.target.value)}
            className="dropdown"
          >
            <option value="Yahoo">Yahoo Finance</option>
          </select>
          <label>Enter a date</label>
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
      </div>
    </div>
  );
};

export default FinancialSearch;