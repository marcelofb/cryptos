import React, { lazy, Suspense, useState, useEffect } from "react";
import Header from "./components/Header";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";
import { createBrowserHistory } from "history";

const CryptosLazy = lazy(() => import("./components/CryptosApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const WalletLazy = lazy(() => import("./components/WalletApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (isSignedIn) {
      history.push("/wallet");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/wallet">
                {!isSignedIn && <Redirect to="/" />}
                <WalletLazy />
              </Route>

              <Route path="/" component={CryptosLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
