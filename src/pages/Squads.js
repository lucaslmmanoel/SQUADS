import React from "react";
import ButtonAppBar from "../components/navbar";
import { Box } from "@material-ui/core";
import Squad from "../components/Squad";
import Grid from "@material-ui/core/Grid";

class Squads extends React.Component {
  render() {
    return (
      <>
        <ButtonAppBar />
        <Box p={3}>
          <h3>S Q U A D S</h3>
        </Box>

        <Grid container fixed direction="row">
          <Grid sm={3}>
            <Squad />
          </Grid>
          <Grid sm={3}>
            <Squad />
          </Grid>
          <Grid sm={3}>
            <Squad />
          </Grid>
          <Grid sm={3}>
            <Squad />
          </Grid>
        </Grid>
      </>
    );
  }
}
export default Squads;
