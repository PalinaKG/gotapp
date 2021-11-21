import React from "react";
import Urls from "./Urls";
import Layout from "./Components/Layout";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  notchedOutline: {
    borderColor: "#2086c9",
    borderWidth: 1,
    "&:hover": {
      borderColor: "#2086c9",
      borderWidth: 2,
    },
  },
  palette: {
    primary: {
      main: "#2086c9",
    },
    secondary: {
      main: "#2086c9",
      light: "#2086c9",
    },
    background: {
      default: "#F5F5F5",
    },
  },
});

function App(props) {
  // Similar to componentDidMount and componentDidUpdate:

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Layout {...props}>
          <Urls {...props} />
        </Layout>
      </div>
    </MuiThemeProvider>
  );
}

export default (App);
