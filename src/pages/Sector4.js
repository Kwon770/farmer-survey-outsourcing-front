import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import SectorFooter from "../components/SectorFooter";

const Sector4 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    const validateAllWritten = () => {
        // return false;
        return true;
    }

    const saveSector4Data = () => {
        const sector4DataObject = {

        }

        localStorage.setItem('sector4', JSON.stringify(sector4DataObject))

    }

    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector4Data()
        navigate('/5')
    }
    return (
        <Background>
            <TitleBlock></TitleBlock>

            <SectorFooter sector={4} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Sector4;