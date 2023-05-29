import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/poppins";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import theme from "./styles/theme/theme";
import GlobalStyle from "./styles/GlobalStyles/GlobalStyles";
import appRouter from "./routers/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
