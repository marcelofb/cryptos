import React from "react";
import CryptosApp from "./components/CryptosApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <CryptosApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
