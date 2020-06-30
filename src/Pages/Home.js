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
              Hey! I'm a graduating senior from Newport High School in Seattle,
              WA and an incoming Electrical Engineering and Computer Science
              Major at UC Berkeley.
            </p>
            <p>
              I enjoy creating impactful and practical projects, from
              simplifying data collection to increasing access to information.
            </p>
            <p>
              As a member of my high school robotics team, I gained an
              appreciation for problem solving and critical thinking as I
              designed mechanisms and user-friendly applications.
            </p>
            <p>
              Always learning something new, I'm always looking for new
              opportunities to learn more and gain industry experience. I love
              traversing the universe of possibilities. I'm open, so feel free
              to message me on LinkedIn or email me at &nbsp;
              <a href"mailto:shreyaeron@hotmail.com">shreyaeron[at]hotmail[dot]com</a>
            </p>
          </Typography>
        </div>
      </Center>
    </div>
  );
}
