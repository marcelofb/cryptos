import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
/* import ThemeProvider from "@flame-ui/utils/theme-provider";
import businessTheme from "@flame-ui/themes/business"; */

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      {/* <ThemeProvider theme={businessTheme}> */}
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            {/* <Route path="/auth/signin" component={Signin} /> */}
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>

            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
      {/* </ThemeProvider> */}
    </div>
  );
};
