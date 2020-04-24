import React from "react";
import "./App.css";
import Center from "react-center";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Link,
  IconButton,
} from "@material-ui/core";

//ICONS
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header.js";
import style from "../style.js";
import projects from "../components/projects.json";
import * as Constants from "../Constants";

const useStyles = makeStyles((style) => ({
  root: {
    width: "100vw",
    minHeight: "100vh",
    height: "auto",
    backgroundColor: Constants.BACKGD_COLOR,
    margin: "0",
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    padding: style.spacing(0),
    textAlign: "center",
    backgroundColor: "#313535",
    color: style.palette.text.secondary,
    maxWidth: 500,
    minWidth: 300,
    width: "20vw",
    // height:500
  },
  img: {
    maxHeight: "200px",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Center>
        <div
          style={{
            maxWidth: "1500px",
            width: "90vw",
            paddingBottom: style.spacing(2),
            paddingTop: style.spacing(7),
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={3}
            alignItems="flex-start"
            justify="center"
            direction="row"
          >
            {Object.keys(projects).map((project) => (
              <Grid
                item
                key={project}
                alignItems="flex-start"
                alignContent="flex-start"
              >
                <Card className={classes.paper}>
                  <CardActionArea>
                    <CardMedia
                      image={projects[project]["img"]}
                      key={project}
                      component="img"
                      className={classes.img}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        color="primary"
                        component="h2"
                        style={{ fontWeight: "bold" }}
                      >
                        {project}
                      </Typography>
                      <Typography variant="body1" color="primary">
                        {projects[project]["desc"]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton
                      onClick={function click() {
                        window.open(projects[project]["git"], "_blank");
                      }}
                    >
                      <GitHubIcon style={{ color: "white" }} />
                    </IconButton>
                    <Button
                      onClick={function click() {
                        window.open(projects[project]["url"], "_blank");
                      }}
                    >
                      <Typography variant="body1" color="primary">
                        Try it out!
                      </Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              // <Grid item alignItems="center">
              //   <Paper className={classes.paper}>
              //     <img src={projects[project]["img"]} key={project} className={classes.img}/>
              //   </Paper>
              // </Grid>
            ))}
          </Grid>
        </div>
      </Center>
    </div>
  );
}
