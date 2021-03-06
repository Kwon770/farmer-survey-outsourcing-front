import React from "react";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import TextBlock from "../components/TextBlock";
import {Button} from "@mui/material";

const SectorLocal = () => {
    const navigate = useNavigate();

    return (
        <Background>
            <TitleBlock>데이터 체크, 로컬</TitleBlock>

            <TextBlock start>
                <pre>{JSON.stringify(JSON.parse(localStorage.getItem('sector1')), null, 2)}</pre>
                <pre>{JSON.stringify(JSON.parse(localStorage.getItem('sector2')), null, 2)}</pre>
                <pre>{JSON.stringify(JSON.parse(localStorage.getItem('sector3')), null, 2)}</pre>
                <pre>{JSON.stringify(JSON.parse(localStorage.getItem('sector4')), null, 2)}</pre>
            </TextBlock>


            <Button variant='contained' onClick={() => navigate('/')} >처음으로 돌아가기</Button>
            <Button variant='contained' onClick={() => {
                localStorage.clear();
                navigate('/00');
            }} >임시 데이터 초기화</Button>
        </Background>
    )
}

export default SectorLocal;