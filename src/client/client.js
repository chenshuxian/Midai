import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import store from "./redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
        </Provider>
      </React.Fragment>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById("root")
);
