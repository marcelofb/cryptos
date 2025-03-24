import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
/* import ThemeProvider from "@flame-ui/utils/theme-provider";
import businessTheme from "@flame-ui/themes/business"; */

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "cryptos",
});

export default () => {
  return (
    <div>
      {/* <ThemeProvider theme={businessTheme}> */}
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
      {/* </ThemeProvider> */}
    </div>
  );
};
