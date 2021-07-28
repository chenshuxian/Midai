import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import store from "./redux";

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
