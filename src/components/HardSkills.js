import React from "react";
import ReactStars from "react-stars";
import {Box, Card, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/core/SvgIcon/SvgIcon";

const HARDSKILLS = [
    {
        'Desenvolvedor Python':
            [
                'testes unitários',
                'Desenvolvimento Ágile',
                'Boas Práticas',
                'testes unitários',
            ]
    }
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
