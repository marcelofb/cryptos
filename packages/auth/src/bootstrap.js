import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;

      if (pathname !== nextPathName) history.push(nextPathName);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
