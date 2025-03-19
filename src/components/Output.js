import googleLogo from "../assets/google.webp";
import appleLogo from "../assets/apple.webp";
import microsoftLogo from "../assets/microsoft.avif";
import "./Output.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Output({ ticker, date }) {
  const navigate = useNavigate();
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [daysDifference, setDaysDifference] = useState(null);
  const [companyImages, setCompanyImages] = useState([]);
  const BASE_URL = "http://127.0.0.1:5000"; 

  // Calculate the number of days difference
  useEffect(() => {
    if (date) {
      const selectedDate = new Date(date);
      const today = new Date();
      const timeDiff = selectedDate - today;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysDifference(daysDiff);
    }
  }, [date]);

  // Fetch investment advice, stock data, and images
  useEffect(() => {
    if (ticker && daysDifference !== null) {
      setLoading(true);
      setError(null);

      fetch(`${BASE_URL}/api/investment_advice?company=${ticker}&days=${daysDifference}`)
        .then((response) => response.ok ? response.json() : Promise.reject("Failed to fetch investment advice"))
        .then((data) => setAdvice(data?.investment_advice || "No advice available."))
        .catch(setError)
        .finally(() => setLoading(false));

      fetch(`${BASE_URL}/api/predict?company=${ticker}&days=${daysDifference}`)
        .then((response) => response.ok ? response.json() : Promise.reject("Failed to fetch stock data"))
        .then((data) => setStockData({ dates: data.dates, prices: data.prices }))
        .catch(setError);

      fetch(`${BASE_URL}/images/${ticker}`)
        .then((response) => response.ok ? response.json() : Promise.reject("Failed to fetch images"))
        .then((data) => {
          const descriptionsMap = {
            "histogram": "Histogram showing distribution of stock prices.",
            "moving_average": "Moving average of the stock prices over time.",
            "outliers": "Outliers identified in the stock price data.",
            "volume_outliers": "Volume outliers showing unusual trading volume.",
          };

          const imagesWithDescriptions = data.images.map((img) => {
            const fileName = img.split("/").pop();
            const key = Object.keys(descriptionsMap).find((desc) => fileName.includes(desc));

            return {
              src: `${BASE_URL}${img}`,
              description: key ? descriptionsMap[key] : "No description available.",
            };
          });

          setCompanyImages(imagesWithDescriptions);
        })
        .catch(setError);
    }
  }, [ticker, daysDifference]);

  // Go back to the previous page
  const goBack = () => {
    navigate(-1);
  };

  // Companies data
  const companies = [
    { id: "1", ticker: "GOOGL", name: "Google", img: googleLogo, text: "Google faces legal challenges over its Play Store." },
    { id: "2", ticker: "AAPL", name: "Apple", img: appleLogo, text: " " },
    { id: "3", ticker: "MSFT", name: "Microsoft", img: microsoftLogo, text: "Microsoft fined $242M for patent infringement on Cortana." },
  ];

  // Chart data
  const chartData = {
    labels: stockData?.dates || [],
    datasets: [
      {
        label: "Stock Price (USD)",
        data: stockData?.prices || [],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="output-parent">
      {companies.map(
        (company) =>
          company.ticker === ticker && (
            <div key={company.id} className="output-container">
              <div className="about-company">
                <h1>{company.name}  
                  {date && (
                    <p>
                      Selected Date: {date} <br />
                      Days from Today: {daysDifference} days
                    </p>
                  )}
                </h1>
                <div className="header">
                  <img className="logo" src={company.img} alt={`${company.name} Logo`} />
                  <p>{company.text}</p>
                </div>
              </div>

              {loading ? (
                <p>Fetching investment advice and stock data...</p>
              ) : error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
              ) : (
                <p><strong>Investment Advice:</strong> {advice}</p>
              )}

              <h2>Stock Price Over Time</h2>
              <div className="chart-container2">
                <div className="chart-container">
                  {stockData?.dates && stockData?.prices ? (
                    <Line data={chartData} options={chartOptions} />
                  ) : (
                    <p>Loading stock chart...</p>
                  )}
                </div>
              </div>

              <div>
              <h2 className="text-2xl font-semibold mb-6">Data Visualization</h2>
<div className="data-visualization-container">
  {companyImages.length > 0 ? (
    companyImages.map((imgObj, index) => (
      <div key={index} className="visualization-card">
        <img src={imgObj.src} alt={`Visualization ${index + 1}`} />
        <div className="visualization-description">
          <p className="text-title">{imgObj.key}</p>
          <p className="text-subtitle">{imgObj.description}</p>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500">No images available.</p>
  )}
</div>

              </div>
            </div>
          )
      )}
      <button className="submit-button" onClick={goBack}>Go Back</button>
    </div>
  );
}
