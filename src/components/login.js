import Particles from 'react-particles-js';
import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {Box, Card} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import image from '../assets/img/team.png'
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import '../assets/particle.css'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(2),
    },
    textField: {
        flexBasis: 200,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mid: {
        marginTop: `10%`,
        marginLeft: `35%`,
        transform: `translate(50px, 50px)`,
    }
}));

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};
export default function LoginForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        cpf: '',
        password: '',
        showPassword: false,
    });

    const login = prop => event => {
        console.log({...values, [prop]: event.target.value});
        document.location.href = '/profile';
    };

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <>

            <Grid className={classes.mid} item xs={3} sm={3}
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
            >
                <Particles className="particles" params={particlesOptions}/>
                <Box m={3}>
                    <Paper>
                        <Card>
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <img src={image} alt=""/>
                                <div>
                                    <TextField
                                        id="outlined-adornment-cpf"
                                        className={clsx(classes.margin, classes.textField)}
                                        variant="outlined"
                                        type="text"
                                        label="CPF"
                                        value={values.cpf}
                                        onChange={handleChange('cpf')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton>
                                                        <SendIcon/>
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField
                                        id="outlined-adornment-password"
                                        className={clsx(classes.margin, classes.textField)}
                                        variant="outlined"
                                        type={values.showPassword ? 'text' : 'password'}
                                        label="Senha"
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <Box m={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<SendIcon/>}
                                        onClick={login()}
                                    >
                                        Entrar
                                    </Button>
                                </Box>
                            </Grid>
                        </Card>
                    </Paper>
                </Box>
            </Grid>
        </>
    );
}
