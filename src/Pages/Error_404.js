import React from "react";
import "./App.css";
import Center from "react-center";
import { Typography } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header.js";
import style from "../style.js";

const useStyles = makeStyles((style) => ({
  root: {
    width: "100vw",
    minHeight: "100vh",
    height: "auto",
    backgroundColor: "#1A1E1E",
    textAlign: "center",
    margin: "0",
  },
  children: {},
  large: {
    width: style.spacing(15),
    height: style.spacing(15),
  },
  title: {
    // MuiAvatar:
  },
}));

export default function Error_404() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <MuiThemeProvider theme={style}>
        <Center>
          <Typography
            variant="h2"
            color="primary"
            style={{
              position: "relative",
              top: "50%",
            }}
          >
            <br />
            Oops, this page does not exist.
          </Typography>
        </Center>
      </MuiThemeProvider>
    </div>
  );
}
