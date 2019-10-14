import React from "react";
import ReactStars from "react-stars";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    Box,
    Card,
    Grid,
    InputLabel,
    MenuItem,
    makeStyles,
    TableHead,
    TableRow,
    TableCell,
    TableBody, Table
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";


const HARDSKILLS = [
    {
        'id': 1,
        'name': 'Desenvolvedor Python',
        'abilities':
            [
                {'a': 0},
                {'b': 0},
                {'c': 0},
                {'d': 0},
                {'e': 0},
                {'f': 0},
            ]
    },
    {
        'id': 2,
        'name': 'Desenvolvedor Javascript',
        'abilities':
            [
                {'f': 0},
                {'g': 0},
                {'h': 0},
                {'i': 0},
                {'j': 0},
                {'k': 0},
            ]
    },
    {
        'id': 3,
        'name': 'Desenvolvedor PHP',
        'abilities':
            [
                {'a': 0},
                {'b': 0},
                {'c': 0},
                {'d': 0},
                {'e': 0},
                {'f': 0},
            ]
    },
    {
        'id': 4,
        'name': 'Desenvolvedor Ruby',
        'abilities':
            [
                {'a': 0},
                {'b': 0},
                {'c': 0},
                {'d': 0},
                {'e': 0},
                {'f': 0},
            ]
    },
    {
        'id': 5,
        'name': 'Desenvolvedor ADVPL',
        'abilities':
            [
                {'a': 0},
                {'b': 0},
                {'c': 0},
                {'d': 0},
                {'e': 0},
                {'f': 0},
            ]
    },
]


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function HardSkills() {
    const classes = useStyles();
    const [state] = React.useState({
        hardskill: '',
        name: 'hai',
        abilities: [] = [],
    });
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        // Ao ser selecionada a profissão recuperar as habilidades da mesma
        state.hardskill = event.target.value;
        state.abilities = HARDSKILLS.filter(item => item.id === state.hardskill).map(skill => skill.abilities)
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
                    <Card className='soft-skills'>
                        <h1>Habilidades <br/> Profissionais</h1>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-controlled-open-select">Profissão</InputLabel>
                            <Select
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={state.hardskill}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'hardskill',
                                    id: 'demo-controlled-open-select',
                                }}
                            >
                                {HARDSKILLS.map(skill => (
                                    <MenuItem value={skill.id}>{skill.name}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                        {state.abilities === [] ? console.log('cara não tem') : console.log('cara tem')}
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
                </Grid>
            </Grid>
        </>
    )
}
