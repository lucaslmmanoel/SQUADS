import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../assets/logo.png";
import SideMenu from "./sidemenu";
import {Avatar} from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));


export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <SideMenu></SideMenu>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="" height="50"/>
                    </Typography>

                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <Avatar
                        alt="User Image"
                        src="http://esb.poupex.com.br/rest/intranet-service/colaboradores/foto/07087646141"
                    />

                    <Button href='/'>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
