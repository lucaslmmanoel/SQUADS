import React from "react";
import ReactStars from "react-stars";
import {
    Box, Card, Grid,
    Table, TableBody, TableCell,
    TableHead, TableRow
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import '../assets/profile.css';


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
                            <h2>Habilidades <br/> Interpessoais</h2>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <h3>Habilidades</h3>
                                        </TableCell>
                                        <TableCell align="right">
                                            <h3>Estrelas</h3>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {SOFTSKILLS.map(skill => (
                                        <>

                                            <TableRow key="teste">
                                                <TableCell component="th" scope="row">
                                                    <h3>{skill}</h3>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <ReactStars
                                                        count={5}
                                                        onChange={ratingChanged}
                                                        size={50}
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
