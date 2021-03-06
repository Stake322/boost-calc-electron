

import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import { Boost } from "./Components/Boost/Boost";
import { ChangePrices } from "./Components/ChangePrices/ChangePrices";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/dota2-boost-calc/" element={<Boost />} />
        <Route exact path="/dota2-boost-calc/prices" element={<ChangePrices />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>

    </Router>
  );
}

export default App;