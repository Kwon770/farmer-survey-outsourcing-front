import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Button,
    FormControl,
    FormControlLabel,
    Select,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
    Checkbox,
    Stack
} from "@mui/material";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import Grid from "../components/Grid";
import QuestionBlock from "../components/QuestionBlock";
import ColorCenterBlock from "../components/ColorCenterBlock";
import CenterBox from "../components/CenterBox";
import SectorFooter from "../components/SectorFooter";

const Sector3 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    return (
        <Background>

        </Background>
    )
}

export default Sector3;