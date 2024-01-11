// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Customer from "./pages/Customer";
import SecondCustomer from "./pages/Second_customer";
import Reports from "./pages/Reports";

const Routess = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/secondcustomer" element={<SecondCustomer />} />
          <Route path="/report" element={<Reports />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routess;
