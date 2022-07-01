import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Button,
    Checkbox, Dialog, DialogActions, DialogTitle,
    FormControl,
    FormControlLabel,
    InputAdornment,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import TextBlock from "../components/TextBlock";
import SectorFooter from "../components/SectorFooter";
import QuestionBlock from "../components/QuestionBlock";
import ColorCenterBlock from "../components/ColorCenterBlock";
import CenterBox from "../components/CenterBox";
import Grid from "../components/Grid";
import GridImg from "../components/GridImg";

const Sector5 = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    return (
        <Background>

        </Background>
    )
}

export default Sector5;