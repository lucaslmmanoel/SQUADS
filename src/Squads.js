import React from "react";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./components/navbar";
import Squad from "./Squad";

class Squads extends React.Component {
  
  render() {
    return (
      <>
        <ButtonAppBar />
        <Container maxWidth="md">
          <Squad />
          <Squad />
        </Container>
      </>
    );
  }
}
export default Squads;
