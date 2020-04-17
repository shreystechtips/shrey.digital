import React from "react";
import "./App.css";
import Center from "react-center";
import {} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header.js";
import style from "./style.js";

const useStyles = makeStyles((style) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#1A1E1E",
    textAlign: "center",
    margin: "0",
    padding: "0",
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

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}
