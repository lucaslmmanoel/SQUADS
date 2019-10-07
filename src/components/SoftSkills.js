import React from "react";
import ReactStars from "react-stars";
import { Box, Card, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const SOFTSKILLS = [
  "Empatia",
  "Gerenciamento de tempo",
  "Comunicação Eficaz",
  "Pensamento crítico",
  "Liderança",
  "Criatividade e Inovação",
  "Trabalho em equipe",
  "Solucionador de problemas e conflitos",
  "Capacidade de decisão"
];

class SoftSkills extends React.Component {
  render() {
    const ratingChanged = newRating => {
      console.log(newRating);
    };
    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Box m={2}>
            <Card align="center">
              <Box p={3}>
                <h1>Soft Skills</h1>
                {SOFTSKILLS.map(skill => (
                  <Typography align="center">
                    <h3>{skill}</h3>
                    <Box ml={12}>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={50}
                        color2={"#ffd700"}
                      />
                    </Box>
                  </Typography>
                ))}
                <Box m={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                  >
                    Submeter para validação
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </>
    );
  }
}

export default SoftSkills;
