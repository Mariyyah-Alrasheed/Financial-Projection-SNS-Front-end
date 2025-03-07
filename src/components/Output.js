// import React from "react";
// import { useNavigate } from "react-router-dom";

// import image from "../assets/google.webp";
// import sales from "../assets/sales.png";
// import insights from "../assets/insights.png";
// import customers from "../assets/customers.png";

// import "./Output.css";

// export default function Output({ ticker }) {
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate(-1);
//   };

//   const companies = [
//     {
//       id: "1",
//       ticker: "GOOGL",
//       name: "Google",
//       img: "src/assets/google.webp",
//       text: "Google went to appeals court Monday in an attempt to convince a three-judge panel to overturn a jury’s verdict declaring its app store for Android smartphones as an illegal monopoly and block the penalties imposed by a federal judge to stop the misbehavior. Video game maker Epic Games, which brought the case alleging Google’s Play Store has been abusing its stranglehold over the Android app market, countered with arguments outlining why both the verdict and punishment should be affirmed to foster more innovation and lower prices.",
//     },
//     {
//       id: "2",
//       ticker: "AAPL",
//       name: "Apple",
//       img: "src/assets/apple.webp",
//       text: "Apple has agreed to a $95m settlement to resolve a class action lawsuit claiming its Siri voice assistant violated user privacy, Reuters reports. The preliminary settlement, filed on 31 October 2023 in the Oakland, California federal court, awaits approval from US District Judge Jeffrey White, the news publication noted. The lawsuit alleged that Siri recorded private conversations and shared them with third parties.",
//     },
//     {
//       id: "3",
//       ticker: "MSFT",
//       name: "Microsoft",
//       img: "src/assets/microsoft.avif",
//       text: "In a significant legal development, Microsoft has been ordered to pay $242 million following a jury verdict that found the tech giant infringed on patents related to its Cortana virtual assistant. The case was won by Skiermont Derby, representing their client. This lawsuit highlights the ongoing complexities and challenges in the tech industry regarding intellectual property rights. For more details, read the full article on Reuters.",
//     },
//     {
//       id: "4",
//       ticker: "",
//       name: "Samsung",
//       img: "public/assets/google.webp",
//       text: "A Texan jury has ordered Samsung to pay Californian start-up Mojo Mobility just over $192m for infringing five of its wireless charging patents. On 13 September the jury, before US district judge Rodney Gilstrap in the US District Court for the Eastern District of Texas, found that Samsung had wilfully infringed five of Mojo’s patents related to wireless charging technology and products in its Galaxy smartphones and other devices.",
//     },
//   ];

//   return (
//     <div>
//       {companies.map(
//         (company) =>
//           company.ticker === ticker && (
//             <div key={company.id} className="output-container">
//               <div className="about-company">
//                 <h1>{company.name}</h1>
//                 <div className="header">
//                   <img className="logo" src={image} />
//                   <p>{company.text}</p>
//                 </div>
//               </div>
//               <h2>Data visualization</h2>
//               <div className="img-grid">
//                 <img src={sales} />
//                 <img src={insights} />
//                 <img src={customers} />
//               </div>
//             </div>
//           )
//       )}
//       <button className="submit-button" onClick={() => goBack()}>
//         Go Back
//       </button>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////






// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import image from "../assets/google.webp";
// import sales from "../assets/sales.png";
// import insights from "../assets/insights.png";
// import customers from "../assets/customers.png";

// import "./Output.css";

// export default function Output({ ticker }) {
//   const navigate = useNavigate();
//   const [advice, setAdvice] = useState(null); // Use null for better conditional rendering
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (ticker === "AAPL") {
//       setLoading(true);
//       fetch(`http://127.0.0.1:5000/api/investment_advice?company=AAPL`)
//         .then((response) => {
//           if (!response.ok) throw new Error("Failed to fetch investment advice");
//           return response.json();
//         })
//         .then((data) => setAdvice(data?.investment_advice || "No advice available."))
//         .catch((error) => setError(error.message))
//         .finally(() => setLoading(false));
//     }
//   }, [ticker]);

//   const goBack = () => {
//     navigate(-1);
//   };

//   const companies = [
//     { id: "1", ticker: "GOOGL", name: "Google", img: "src/assets/google.webp", text: "Google faces legal challenges over its Play Store." },
//     { id: "2", ticker: "AAPL", name: "Apple", img: "src/assets/apple.webp", text: "Apple settles $95M lawsuit over Siri privacy violations." },
//     { id: "3", ticker: "MSFT", name: "Microsoft", img: "src/assets/microsoft.avif", text: "Microsoft fined $242M for patent infringement on Cortana." },
//     { id: "4", ticker: "SSNLF", name: "Samsung", img: "public/assets/google.webp", text: "Samsung ordered to pay $192M for patent violations." },
//   ];

//   return (
//     <div>
//       {companies.map(
//         (company) =>
//           company.ticker === ticker && (
//             <div key={company.id} className="output-container">
//               <div className="about-company">
//                 <h1>{company.name}</h1>
//                 <div className="header">
//                   <img className="logo" src={image} alt={`${company.name} Logo`} />
//                   <p>{company.text}</p>
//                   {ticker === "AAPL" && (
//                     <div>
//                       {loading ? (
//                         <p>Fetching latest investment advice...</p>
//                       ) : error ? (
//                         <p style={{ color: "red" }}>Error: {error}</p>
//                       ) : (
//                         <p><strong>Investment Advice:</strong> {advice}</p>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <h2>Data visualization</h2>
//               <div className="img-grid">
//                 <img src={sales} alt="Sales data visualization" />
//                 <img src={insights} alt="Insights data visualization" />
//                 <img src={customers} alt="Customer data visualization" />
//               </div>
//             </div>
//           )
//       )}
//       <button className="submit-button" onClick={goBack}>Go Back</button>
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////


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

  // Prepare data for the line chart
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
