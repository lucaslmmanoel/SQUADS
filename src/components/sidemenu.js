import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function SideMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });


  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({...state, [side]: open});
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link href='/metrics'>
          <ListItem button key="Metrics">
            <ListItemText primary="Metrics"/>
          </ListItem>
        </Link>
        <Link href='/squads'>
          <ListItem button key="Squads">
            <ListItemText primary="Squads"/>
          </ListItem>
        </Link>
      </List>
      <Divider/>
      <List>
        <Link href='/profile'>
          <ListItem button key="Perfil">
            <ListItemText primary="Perfil"/>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <>
      <Button onClick={toggleDrawer("left", true)}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
        >
          <MenuIcon/>
        </IconButton>
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </>
  );
}
