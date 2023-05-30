import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { RootState, setupStore, store } from "../store";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={testStore}>{children}</Provider>;
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
