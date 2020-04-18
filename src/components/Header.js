import React from "react";
import { Typography } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Center from "react-center";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "../style.js";
import * as Constants from "../Constants.js";
const useStyles = makeStyles((style) => ({
  item: {
    width: "100vw",
    paddingTop: style.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Center>
      <div className={classes.item}>
        <MuiThemeProvider theme={style}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography color="primary" variant="h2">
              Shrey Aeron
            </Typography>
          </Link>
          <Typography
            color="primary"
            variant="h6"
            style={{ fontStyle: "italic" }}
          >
            Getting. Things. Done.
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing="2"
          >
            <Grid item>
              <Link to="/projects">
                <Typography
                  color="primary"
                  variant="h5"
                  style={{ textDecorationLine: "underline" }}
                >
                  Projects
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <a
                href={Constants.GIT_URL}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Typography
                  color="primary"
                  variant="h5"
                  style={{ textDecorationLine: "underline" }}
                >
                  Git
                </Typography>
              </a>
            </Grid>
            <Grid item>
              <a
                href={Constants.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Typography
                  color="primary"
                  variant="h5"
                  style={{ textDecorationLine: "underline" }}
                >
                  Linkedin
                </Typography>
              </a>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </Center>
  );
}
