import React from "react";
import ButtonAppBar from "./components/navbar";
import { Paper, Typography } from "@material-ui/core";
class Squad extends React.Component {
  render() {
    return (
      <>
        <ButtonAppBar />
        <Paper>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
      </>
    );
  }
}
export default Squad;
