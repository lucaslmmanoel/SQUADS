import React from "react";
import ButtonAppBar from "../components/navbar";
import SoftSkills from "../components/SoftSkills";
import HardSkills from "../components/HardSkills";
import SystemSkills from "../components/SystemSkills";


class Profile extends React.Component {
    render() {
        return (
            <>
                <ButtonAppBar/>
                <SoftSkills/>
                <HardSkills/>
                <SystemSkills/>
            </>
        );
    }
}

export default Profile;
