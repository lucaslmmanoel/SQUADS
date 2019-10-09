import React from "react";
import ReactStars from "react-stars";
import {Box, Card, Grid, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import '../assets/profile.css'

const SYSTEMS = [
    "Sistema A",
    "Sistema B",
    "Sistema C",
    "Sistema D",
    "Sistema E",
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
                            <h1>Conhecimentos em Sistemas</h1>
                            {SYSTEMS.map(skill => (
                                <>
                                    <h3>{skill}</h3>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={50}
                                        color2={"#ffd700"}
                                    />
                                </>
                            ))}
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
