import React from "react";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "../components/navbar";
import { Box } from "@material-ui/core";
import Squad from "../components/Squad";

class Squads extends React.Component {
  render() {
    return (
      <>
        <ButtonAppBar />

        <Container maxWidth="md">
          <Box>
            <h3>S Q U A D S</h3>
          </Box>
          <Squad />
          <Squad />
        </Container>
      </>
    );
  }
}
export default Squads;
