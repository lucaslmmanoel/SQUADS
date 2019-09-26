import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SquadAvatar from "./avatar";

class Squad extends React.Component {
  render() {
    return (
      <>
        <Box p={3}>
          <Paper>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h5" component="h3">
                Squad Name
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
             <SquadAvatar/>
            </Grid>
          </Paper>
        </Box>
      </>
    );
  }
}
export default Squad;
