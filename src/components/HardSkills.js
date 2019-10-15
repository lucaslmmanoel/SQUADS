import React from "react";
import ReactStars from "react-stars";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  Box,
  Card,
  Grid,
  InputLabel,
  MenuItem,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import AddCircle from "@material-ui/icons/AddCircle";

const HARDSKILLS = [
  {
    id: 1,
    name: "Desenvolvedor Python",
    abilities: [
      "Testes Unitários",
      "Clean Code",
      "PEP 8",
      "Flask",
      "Django",
      "Rasa"
    ]
  },
  {
    id: 2,
    name: "Desenvolvedor Ruby",
    abilities: ["Testes Unitários", "Clean Code", "Cucumber", "Capybara"]
  },
  {
    id: 3,
    name: "Desenvolvedor Java",
    abilities: ["Testes Unitários", "Clean Code", "Spring Boot", "EJB"]
  },
  {
    id: 4,
    name: "Desenvolvedor Javascript",
    abilities: ["Testes Unitários", "Clean Code", "Gambiarra", "React"]
  },
  {
    id: 5,
    name: "Analista de Requisitos",
    abilities: ["BPMN", "Lorem", "ipsum", "Wthv"]
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function HardSkills() {
  const classes = useStyles();
  const [state] = React.useState({
    hardskill: "",
    name: "hai",
    abilities: []
  });
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    // Ao ser selecionada a profissão recuperar as habilidades da mesma
    state.hardskill = event.target.value;
    state.abilities = HARDSKILLS.filter(
      item => item.id === state.hardskill
    ).map(skill => skill.abilities);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const ratingChanged = newRating => {
    console.log(newRating);
  };

  return (
    <>
      <Grid container>
        <Grid item>
          <Card className="soft-skills">
            <h1>
              Habilidades <br /> Profissionais
            </h1>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">
                Profissão
              </InputLabel>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={state.hardskill}
                onChange={handleChange}
                inputProps={{
                  name: "hardskill",
                  id: "demo-controlled-open-select"
                }}
              >
                {HARDSKILLS.map(skill => (
                  <MenuItem value={skill.id}>{skill.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {state.abilities.length > 0 ? (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <h3>Sistemas</h3>
                    </TableCell>
                    <TableCell align="right">
                      <h3>Estrelas</h3>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.abilities[0].map(ability => (
                    <>
                      <TableRow key="teste">
                        <TableCell component="th" scope="row">
                          <h3>{ability}</h3>
                        </TableCell>
                        <TableCell align="right">
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={50}
                            color2={"#ffd700"}
                          />
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            ) : null}
            <Box m={2}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
              >
                Submeter para validação
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
