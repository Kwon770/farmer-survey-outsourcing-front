import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Background from "../components/Background";
import {useNavigate} from "react-router-dom";
import TitleBlock from "../components/TitleBlock";
import QuestionBlock from "../components/QuestionBlock";
import SectorFooter from "../components/SectorFooter";
import {Button, FormControlLabel, Select, MenuItem, Radio, TextField} from "@mui/material";

const Sector2 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);
    const [s2b1, setS2b1] = useState('');
    const [s2b1Data, setS2b1Data] = useState([]);
    const [s2b2, setS2b2] = useState('');
    const [s2b3, setS2b3] = useState('');
    const [s2b4, setS2b4] = useState('');
    const [s2b5, setS2b5] = useState('');
    const [s2b6, setS2b6] = useState('');
    useEffect(() => {
        console.log(s2b1Data)
    }, [s2b1Data])
    const handleS2b1 = (e, idx, type) => {
        setS2b1Data(s2b1Data.map((element, i) => {
            if (i === idx) {
                element[type] = e.target.value;
            }
            return element;
        }));
    }
    const handleS2b1AddingColumn = () => {
        setS2b1Data([...s2b1Data, ['','','']]);
    }
    const handleS2b1RemovingColumn = (idx) => {
        setS2b1Data(s2b1Data.filter((_, i) => i !== idx));
    }
    const handleS2b2 = (e) => {
        setS2b2(e.target.value);
    }
    const handleS2b3 = (e) => {
        setS2b3(e.target.value);
    }
    const handleS2b4 = (e) => {
        setS2b4(e.target.value);
    }
    const handleS2b5 = (e) => {
        setS2b5(e.target.value);
    }
    const validateAllWritten = () => {
        if (
            s2b1 === ''
        ) {
            return false;
        }

        return true;
    }

    const saveSector2Data = () => {
        const sector2DataObject = {
            's2b1': s2b1,
            's2b2': s2b2,
            's2b3': s2b3,
            's2b4': s2b4,
            's2b5': s2b5,
            's2b6': s2b6,
        }

        localStorage.setItem('sector2', JSON.stringify(sector2DataObject))

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
            <TitleBlock>
                2. 농지 수요
            </TitleBlock>

            <QuestionBlock
                title={<div>2-1. 귀하의 올해(2022년) 영농규모(농지 또는 축사 면적)를 묻는 문항입니다. 다음 표에서 해당하는 부 분에 응답하여 주십시오.</div>}
                gridColumnProperty={"10fr 10fr 10fr 1fr"}
                rowGap={10}
                columnGap={10}
                onChange={handleS2b1}
            >
                <ColorCenterBlock>구분</ColorCenterBlock>
                <ColorCenterBlock>전체 영농 면적<br/>(경작, 사육)</ColorCenterBlock>
                <ColorCenterBlock>임대한 농지</ColorCenterBlock>
                <div />

                {
                    s2b1Data.map((element, idx) => (
                        <>
                            <Select value={element[0]} onChange={(e) => handleS2b1(e, idx, 0)}>
                                <MenuItem value={'1'}>논</MenuItem>
                                <MenuItem value={'2'}>밭</MenuItem>
                                <MenuItem value={'3'}>과수원</MenuItem>
                                <MenuItem value={'4'}>시설원예</MenuItem>
                                <MenuItem value={'5'}>축산</MenuItem>
                            </Select>
                            <TextField type='number' value={element[1]} onChange={(e) => handleS2b1(e, idx, 1)}/>
                            <TextField type='number' value={element[2]} onChange={(e) => handleS2b1(e, idx, 2)}/>
                            <Button variant='text' color='error' onClick={() => handleS2b1RemovingColumn(idx)}>삭제</Button>
                        </>
                    ))
                }

                <div/>
                <Button variant='text' onClick={handleS2b1AddingColumn}>추가하기</Button>
                <div/>
            </QuestionBlock>

            <QuestionBlock title={<div>2-2. 귀하께서는 현재 영농규모(농지 또는 축사 면적)를 확대 또는 축소하실 계획이 있으십니까?</div>}
                           gridColumnProperty={"repeat(2,1fr)"}
                           onChange={handleS2b1}
            >
                <FormControlLabel value='1' control={<Radio/>} label='남'/>
                <FormControlLabel value='2' control={<Radio/>} label='여'/>
            </QuestionBlock>

            <SectorFooter sector={2} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

const ColorCenterBlock = styled.div`
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.innerHighlightColor};

`

export default Sector2;