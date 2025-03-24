import React from "react";
import CryptosApp from "./components/CryptosApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <CryptosApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
