import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const style =  createMuiTheme({
    palette: {
      primary: {
        main: "#D4D6D4",
      },
      secondary: {
        main: "#f44336",
      },
    },
    typography: {
      fontFamily: "Crimson Text, serif",
    },
  });
  

export default style;