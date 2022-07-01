import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Checkbox, FormControl, FormControlLabel, RadioGroup, Radio, Stack, TextField} from "@mui/material";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import TextBlock from "../components/TextBlock";
import Grid from "../components/Grid";
import QuestionBlock from "../components/QuestionBlock";
import ColorCenterBlock from "../components/ColorCenterBlock";
import CenterBox from "../components/CenterBox";
import SectorFooter from "../components/SectorFooter";

const Sector2 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    return (
        <Background>

        </Background>
    )
}

export default Sector2;