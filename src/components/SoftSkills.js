import React from "react";
import ReactStars from "react-stars";
import {Box, Card, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import '../assets/profile.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const SOFTSKILLS = [
    "Empatia",
    "Gerenciamento de tempo",
    "Comunicação Eficaz",
    "Pensamento crítico",
    "Liderança",
    "Criatividade e Inovação",
    "Trabalho em equipe",
    "Solucionador de problemas e conflitos",
    "Capacidade de decisão"
];

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}


class SoftSkills extends React.Component {
    render() {
        const ratingChanged = newRating => {
            console.log(newRating);
        };
        return (
            <>
                <Grid container>
                    <Grid item>
                        <Card className='soft-skills'>
                            <h1>Habilidades <br/> Interpessoais</h1>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Habilidades</TableCell>
                                        <TableCell align="right">Estrelas</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {SOFTSKILLS.map(skill => (
                                        <>

                                            <TableRow key="teste">
                                                <TableCell component="th" scope="row">
                                                    {skill}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <ReactStars
                                                        count={5}
                                                        onChange={ratingChanged}
                                                        size={25}
                                                        color2={"#ffd700"}
                                                    /></TableCell>
                                            </TableRow>
                                        </>
                                    ))}
                                </TableBody>
                            </Table>

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

export default SoftSkills;
