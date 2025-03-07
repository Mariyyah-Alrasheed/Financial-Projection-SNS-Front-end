import image from "../assets/apple.webp";
import YtestYpredect from "../assets/YtestYpredect.png";
import outliers3 from "../assets/outliers3.png";
import HistogramStock from "../assets/HistogramStock.png";
import stcLogo from "../assets/STC_logo.png";

import "./Output.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default function Output({ ticker ,date }) {
  const navigate = useNavigate();
  const [advice, setAdvice] = useState(null);  // Use null for better conditional rendering
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stockData, setStockData] = useState(null); // Store stock price data

  useEffect(() => {
    if (ticker === "AAPL") {
      setLoading(true);
      // Fetching investment advice
      fetch(`http://127.0.0.1:5000/api/investment_advice?company=AAPL`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch investment advice");
          return response.json();
        })
        .then((data) => setAdvice(data?.investment_advice || "No advice available."))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));

      // Fetching stock data
      fetch(`http://127.0.0.1:5000/api/predict?company=AAPL`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch stock data");
          return response.json();
        })
        .then((data) => {
          setStockData({
            dates: data.dates,   // Dates array (x-axis)
            prices: data.prices, // Prices array (y-axis)
          });
        })
        .catch((error) => setError(error.message));
    }
  }, [ticker]);

  const goBack = () => {
    navigate(-1);
  };

  const companies = [
    { id: "1", ticker: "GOOGL", name: "Google", img: "src/assets/google.webp", text: "Google faces legal challenges over its Play Store." },
    { id: "2", ticker: "AAPL", name: "Apple", img: "src/assets/apple.webp", text: " " },
    { id: "3", ticker: "MSFT", name: "Microsoft", img: "src/assets/microsoft.avif", text: "Microsoft fined $242M for patent infringement on Cortana." },
    { id: "4", ticker: "SSNLF", name: "Samsung", img: "public/assets/google.webp", text: "Samsung ordered to pay $192M for patent violations." },
  ];

  const chartData = {
    labels: stockData?.dates || [],  // X-axis labels (dates)
    datasets: [
      {
        label: "Stock Price (USD)",
        data: stockData?.prices || [],  // Y-axis data (prices)
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow full height/width control
  };
    
   
  return (
    <div className="output-parent">
      {companies.map(
        (company) =>
          company.ticker === ticker && (
            <div key={company.id} className="output-container">
              <div className="about-company">
                <h1>{company.name}</h1>
                <div className="header">
                  <img className="logo" src={image} alt={`${company.name} Logo`} />
                  <p>{company.text}</p>
                  {/* {ticker === "AAPL" && (
                    <div>
                      {loading ? (
                        <p>Fetching investment advice and stock data...</p>
                      ) : error ? (
                        <p style={{ color: "red" }}>Error: {error}</p>
                      ) : (
                        <p><strong>Investment Advice:</strong> {advice}</p>
                      )}
                    </div>
                  )} */}
                </div>
              </div>
              {ticker === "AAPL" && (
                    <div>
                      {loading ? (
                        <p>Fetching investment advice and stock data...</p>
                      ) : error ? (
                        <p style={{ color: "red" }}>Error: {error}</p>
                      ) : (
                        <p><strong>Investment Advice:</strong> {advice}</p>
                      )}
                    </div>
                  )}
              <h2>Stock Price Over Time</h2>
              <div className="chart-container2">
              {stockData && (
                <div className="chart-container">
                  <Line data={chartData} options={chartOptions} />
                </div>
              )}
              </div>
              <h2>Data visualization</h2>
              <div className="img-grid">
                <span>
                  <img src={YtestYpredect} alt="Sales data visualization" />
                  <p>Y test & Y predict</p>
                </span>
                <span>
                  <img src={outliers3} alt="Insights data visualization" />
                  <p>Volume with outliers highlighted</p>
                </span>
                <span>
                  <img src={HistogramStock} alt="Customer data visualization" />
                  <p>Histogram of stock closing prices</p>
                </span>
              </div>
            </div>
          )
      )}
      <button className="submit-button" onClick={goBack}>Go Back</button>
    </div>
  );
 
 
}
