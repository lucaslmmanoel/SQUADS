import React from "react";
import ReactStars from "react-stars";
import {Card, Grid} from "@material-ui/core";


class SoftSkills extends React.Component {
    render() {
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        return (
            <>
                <Card>
                    <h1>Soft Skills</h1>
                    <Grid
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <h3>Nome Skill</h3>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={48}
                            color2={'#ffd700'}/>
                        <h3>Nome Skill</h3>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={48}
                            color2={'#ffd700'}/>
                        <h3>Nome Skill</h3>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={48}
                            color2={'#ffd700'}/>
                        <h3>Nome Skill</h3>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={48}
                            color2={'#ffd700'}/>
                    </Grid>
                </Card>


            </>
        );
    }
}

export default SoftSkills;
