// IMPORTS MODULES TO BE USED

import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import MainRouter from "../MainRouter";
import theme from "../theme";

// CLEANS UP SERVER SIDE CSS STYLES

const App = () => {
  React.useEffect(() => {
    // Remove the server-side injected CSS styles
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  // RETURNS THE MAIN ROUTER COMPONENT

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Router>
  );
};

export default App;
