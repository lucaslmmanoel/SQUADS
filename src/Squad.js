import React from "react";
import { Paper, Typography, Avatar, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";

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
              <Box m={1}>
                <Avatar>LM</Avatar>
              </Box>
              <Box m={1}>
                <Avatar>ML</Avatar>
              </Box>
              <Box m={1}>
                <Avatar>LR</Avatar>
              </Box>
              <Box m={1}>
                <Avatar>AM</Avatar>
              </Box>
              <Box m={1}>
                <Avatar>PL</Avatar>
              </Box>
              <Box m={1}>
                <Avatar>O</Avatar>
              </Box>
            </Grid>
          </Paper>
        </Box>
      </>
    );
  }
}
export default Squad;
