import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import SectorFooter from "../components/SectorFooter";
import {Checkbox, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import QuestionBlock from "../components/QuestionBlock";
import Grid from "../components/Grid";

const Sector4 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    return (
        <Background>

        </Background>
    )
}

export default Sector4;