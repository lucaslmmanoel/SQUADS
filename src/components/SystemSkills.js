import React from "react";
import ReactStars from "react-stars";
import {Box, Card, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import '../assets/profile.css'

const SYSTEMS = [
    "Sistema A",
    "Sistema B",
    "Sistema C",
    "Sistema D",
    "Sistema E",
    "Sistema F",
    "Sistema G",
    "Sistema H",
    "Sistema I",
    "Sistema J",
];

class SystemSkills extends React.Component {
    render() {
        const ratingChanged = newRating => {
            console.log(newRating);
        };
        return (
            <>
                <Grid container>
                    <Grid item>
                        <Card className='soft-skills'>
                            <h1>Conhecimentos em  <br/> Sistemas</h1>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sistemas</TableCell>
                                        <TableCell align="right">Estrelas</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {SYSTEMS.map(skill => (
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

export default SystemSkills;
