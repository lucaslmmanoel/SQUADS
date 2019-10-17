import React from "react";
import ReactStars from "react-stars";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import {
  Box,
  Card,
  InputLabel,
  MenuItem,
  makeStyles,
  Input
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
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
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  details: {
    alignItems: 'center',
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

export default function HardSkills() {
  const classes = useStyles();
  const [state] = React.useState({
    functions: [],
    abilities: []
  });
  const [functionName, setFunctionName] = React.useState([]);

  const handleChange = event => {
    setFunctionName(event.target.value);
    state.functions = event.target.value;
  };
  const getDataFunctionById = (id) => (
    HARDSKILLS.find(item => item.id === id)
  )

  const ratingChanged = () => {
    console.log('oi')
  }

  return (
    <Box boxShadow={3}>
      <Card className="soft-skills">
        <h2>
          Habilidades Profissionais
        </h2>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Função</InputLabel>
          <Select
            multiple
            value={functionName}
            onChange={handleChange}
            inputProps={{
              name: "hardskill",
              id: "demo-controlled-open-select"
            }}
            input={<Input id="select-multiple-checkbox"/>}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {HARDSKILLS.map(skill => (
              <MenuItem key={skill.id} value={skill.id}>
                <Checkbox checked={functionName.indexOf(skill.id) > -1}/>
                <ListItemText primary={skill.name}/>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {state.functions[0] > 0 ? state.functions.map(professionId => (
          <>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{getDataFunctionById(professionId).name}</Typography>
              </ExpansionPanelSummary>
              <List component="nav" aria-label="mailbox folders">
                {getDataFunctionById(professionId).abilities.length > 0 ?
                  getDataFunctionById(professionId).abilities.map(ability => (
                    <>
                      <ListItem button>
                        <ListItemText primary={ability}/>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={50}
                          color2={"#ffd700"}
                        />
                      </ListItem>
                      <Divider/>
                    </>
                  ))
                  : null}
              </List>
            </ExpansionPanel>
          </>
        )) : null}
      </Card>
    </Box>
  );
}
