import React from "react";
import ReactStars from "react-stars";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Box, Card, Grid, InputLabel} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const HARDSKILLS = [
    {
        'Desenvolvedor Javascript':
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
        'Desenvolvedor Python':
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
        'Desenvolvedor Ruby':
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
        'Desenvolvedor Ruby':
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
        'Desenvolvedor Python':
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
        'Desenvolvedor Java':
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

class HardSkills extends React.Component {
    render() {
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        return (
            <>
                <Grid container>
                    <Grid item>
                        <Card className='soft-skills'>
                            <h1>Habilidades <br/> Profissionais</h1>
                            <FormControl variant="outlined">
                                <InputLabel ref={'inputLabel'} htmlFor="outlined-age-native-simple">
                                    Age
                                </InputLabel>
                                <Select
                                    native
                                    value={0}
                                    onChange={console.log('putz')}
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option value="" />
                                    <option value={11}>TESTE B</option>
                                </Select>
                            </FormControl>
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
        );
    }
}

export default HardSkills;
