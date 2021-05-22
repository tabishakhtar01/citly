import React from "react";
import Index from "./Index";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Index />
      </Router>
    </>
  );
};

export default App;
