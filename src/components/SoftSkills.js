import React from "react";
import ReactStars from "react-stars";
import {
  Box, Card
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import '../assets/profile.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";


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
        <Box boxShadow={3}>
          <Card className='soft-skills'>
            <h2>Habilidades  Interpessoais</h2>
            <List component="nav" aria-label="mailbox folders">
              {SOFTSKILLS.map(skill => (
                <>
                  <ListItem button>
                    <ListItemText primary={skill}/>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={50}
                      color2={"#ffd700"}
                    />
                  </ListItem>
                  <Divider/>
                </>
              ))}
            </List>
            <Box m={2}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon/>}
              >
                Submeter para validação
              </Button>
            </Box>
          </Card>
        </Box>
      </>
    );
  }
}

export default SoftSkills;
