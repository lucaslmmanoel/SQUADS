import React from "react";
import {
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SquadAvatar from "./avatar";

class Squad extends React.Component {
  render() {
    return (
      <>
        <Box p={4}>
          <Paper>
            <Grid container justify="center" alignItems="center">
              <Typography variant="h5" component="h3">
                Squad Name
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <SquadAvatar />
                  </ListItemAvatar>
                  <ListItemText primary="Lead" secondary="Lucas Manoel" />
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListItemAvatar>
                    <SquadAvatar />
                  </ListItemAvatar>
                  <ListItemText primary="UX" secondary="Lucas Manoel" />
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListItemAvatar>
                    <SquadAvatar />
                  </ListItemAvatar>
                  <ListItemText primary="DEV" secondary="Lucas Manoel" />
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListItemAvatar>
                    <SquadAvatar />
                  </ListItemAvatar>
                  <ListItemText primary="QA" secondary="Lucas Manoel" />
                </ListItem>
              </List>
            </Grid>
          </Paper>
        </Box>
      </>
    );
  }
}
export default Squad;
