import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Charities from "./pages/Charities";
import Donation from "./pages/Donation";
import TransactionHistory from "./pages/TransactionHistory";
import Layout from "./components/Layout"; // Import your layout component

function App() {
  const [alias, setAlias] = useState("");

  // Fetch alias when the component mounts
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch("/getinfo");
        const data = await response.json();
        setAlias(data.alias);
      } catch (error) {
        console.error("Error fetching alias:", error);
      }
    };
    getInfo();
  }, []);

  return (
    <Router>
      {/* Passing alias as a prop to Layout if needed */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home alias={alias} />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Route>
      </Routes>
      {/* Optionally display alias globally */}
      <footer>
        <p>Alias: {alias}</p>
      </footer>
    </Router>
  );
}

export default App;
