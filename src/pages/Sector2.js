import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import SectorFooter from "../components/SectorFooter";

const Sector2 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    const validateAllWritten = () => {
        // return false;
        return true;
    }

    const saveSector2Data = () => {
        const sector2DataObject = {

        }

        localStorage.setItem('sector4', JSON.stringify(sector2DataObject))

    }

    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector2Data()
        navigate('/3')
    }
    return (
        <Background>
            <TitleBlock></TitleBlock>

            <SectorFooter sector={4} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Sector2;