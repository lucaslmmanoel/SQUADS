import React from "react";
import ButtonAppBar from "../components/navbar";

import ProfileTabs from "../components/ProfileTabs";


class ProfilePage extends React.Component {
    render() {
        return (
            <>
                <ButtonAppBar/>
                <ProfileTabs/>
            </>
        );
    }
}

export default ProfilePage;
