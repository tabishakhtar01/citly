import React from "react";
import Index from "./Index";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Index />
      </Router>
    </>
  );
};

export default App;
