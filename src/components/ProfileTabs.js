import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SoftSkills from "../components/SoftSkills";
import HardSkills from "./HardSkills";
import SystemSkills from "./SystemSkills";

function TabPanel(props) {

    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ProfileTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Habilidades Interpessoais" {...a11yProps(0)} />
                    <Tab label="Habilidades Profissionais" {...a11yProps(1)} />
                    <Tab label="Conhecimentos em Sistemas" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                    <Box p={1}>
                        <SoftSkills/>
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                    <Box p={1}>
                        <HardSkills/>
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                    <Box p={1}>
                        <SystemSkills/>
                    </Box>
                </Box>
            </TabPanel>

        </div>
    );
}
