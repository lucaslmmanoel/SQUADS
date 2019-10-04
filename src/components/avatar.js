import React from "react";
import {Avatar, Box, Modal, Fade, Backdrop} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

const data = [
    {
        subject: "Math",
        A: 120,
        B: 110,
        fullMark: 150
    },
    {
        subject: "Chinese",
        A: 98,
        B: 130,
        fullMark: 150
    },
    {
        subject: "English",
        A: 86,
        B: 130,
        fullMark: 150
    },
    {
        subject: "Geography",
        A: 99,
        B: 100,
        fullMark: 150
    },
    {
        subject: "Physics",
        A: 85,
        B: 90,
        fullMark: 150
    },
    {
        subject: "History",
        A: 65,
        B: 85,
        fullMark: 150
    }
];

export default function SquadAvatar() {
    const useStyles = makeStyles(theme => ({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: "1px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3)
        }
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box m={1}>
                <Avatar onClick={handleOpen}
                        src="http://esb.poupex.com.br/rest/intranet-service/colaboradores/foto/07087646141"/>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>

                        <RadarChart
                            cx={300}
                            cy={250}
                            outerRadius={150}
                            width={500}
                            height={500}
                            data={data}
                        >
                            <PolarGrid/>
                            <PolarAngleAxis dataKey="subject"/>
                            <PolarRadiusAxis/>
                            <Radar
                                name="Mike"
                                dataKey="A"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}
