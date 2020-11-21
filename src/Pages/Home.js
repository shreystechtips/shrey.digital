import React from "react";
import "./App.css";
import Center from "react-center";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import style from "../style.js";
import * as Constants from "../Constants";

const useStyles = makeStyles((style) => ({
  root: {
    width: "100vw",
    minHeight: "100vh",
    height: "auto",
    backgroundColor: Constants.BACKGD_COLOR,
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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <Center>
        <div
          style={{
            maxWidth: "750px",
            width: "90vw",
            paddingBottom: style.spacing(2),
          }}
        >
          <Typography
            color="primary"
            variant="h5"
            style={{ textAlign: "left", textIndent: style.spacing(3) }}
          >
            <p>
              Hey! I'm a freshman at UC Berkeley majoring in Electrical Engineering and Computer Science.
            </p>
            <p>
              I enjoy bringing my ideas to life and sharing them. My interests 
              include Natural Language Processing and System Design, but I am keen to learn about other fields!
            </p>
            <p>
              As a member of a robotics team, I gained an
              appreciation for problem solving and critical thinking as I
              designed mechanisms and user-centric applications.
            </p>
            <p>
              I'm currently looking for new
              opportunities to learn and gain hands-on experience. Please message me on LinkedIn or email me at &nbsp;
              <a
                href="mailto:aeron@berkeley.edu"
                style={{ textDecoration: "underline", color: "inherit" }}
                color="primary"
              >
                aeron[at]berkeley[dot]edu
              </a>
            </p>
          </Typography>
        </div>
      </Center>
    </div>
  );
}
