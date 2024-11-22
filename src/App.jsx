import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Charities from "./pages/Charities";
import Donation from "./pages/Donation";
import TransactionHistory from "./pages/TransactionHistory";
import Layout from "./components/Layout"; // Import your layout component

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Route>
          
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
