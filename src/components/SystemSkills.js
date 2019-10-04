import React from "react";
import ReactStars from 'react-stars'


class SystemSkills extends React.Component {
    render() {
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        return (
            <>
                <h3>Software Skills</h3>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'}/>
            </>
        );
    }
}

export default SystemSkills;
