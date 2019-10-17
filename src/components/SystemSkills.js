import React from "react";
import ReactStars from "react-stars";
import {
  Box,
  Card,
  Input,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import '../assets/profile.css'
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


const SYSTEMS = [
  {'id': 1, 'name': 'Lorem 1'},
  {'id': 2, 'name': 'Lorem 2'},
  {'id': 3, 'name': 'Lorem 3'},
  {'id': 4, 'name': 'Lorem 4'},
  {'id': 5, 'name': 'Lorem 5'},
  {'id': 6, 'name': 'Lorem 6'},
  {'id': 7, 'name': 'Lorem 7'},
  {'id': 8, 'name': 'Lorem 8'},
  {'id': 9, 'name': 'Lorem 9'},
];
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
const ratingChanged = newRating => {
  console.log(newRating);
};

export default function SystemSkills() {
  const [state] = React.useState({
    systems: [],
  });
  const [systemName, setSystemName] = React.useState([]);
  const handleChange = event => {
    setSystemName(event.target.value);
    state.systems = event.target.value;
    console.log(state.systems)
  };
  const getDataSystemById = (id) => (
    SYSTEMS.find(item => item.id === id).name
  )
  return (
    <Box boxShadow={3}>
      <Card className="soft-skills">
        <h2>
          Habilidades Profissionais
        </h2>
        <FormControl>
          <InputLabel htmlFor="select-multiple-checkbox">Sistemas</InputLabel>
          <Select
            multiple
            value={systemName}
            onChange={handleChange}
            inputProps={{
              name: "hardskill",
              id: "demo-controlled-open-select"
            }}
            input={<Input id="select-multiple-checkbox"/>}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {SYSTEMS.map(skill => (
              <MenuItem key={skill.id} value={skill.id}>
                <Checkbox checked={systemName.indexOf(skill.id) > -1}/>
                <ListItemText primary={skill.name}/>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <List component="nav" aria-label="mailbox folders">
          {state.systems[0] > 0 ?
            state.systems.map(system => (
              <>
                <ListItem button>
                  <ListItemText primary={getDataSystemById(system)}/>
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
  );
}
