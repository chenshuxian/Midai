import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "./client/Routes";

const render = (req, store) => {
  const content = renderToString(
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <StaticRouter location={req.path}>{renderRoutes(Routes)}</StaticRouter>
      </Provider>
    </React.Fragment>

  );

  const html = `
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  return html;
};

export default render;
