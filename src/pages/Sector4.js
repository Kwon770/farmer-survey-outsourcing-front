import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import SectorFooter from "../components/SectorFooter";
import {Checkbox, FormControlLabel, Radio} from "@mui/material";
import QuestionBlock from "../components/QuestionBlock";

const Sector4 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);
    const [s4b1, setS4b1] = useState('');
    const [s4b2b1, setS4b2b1] = useState('');
    const [s4b2b1Data, setS4b2b1Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false // 4
    ])
    const [s4b2b2, setS4b2b2] = useState('');

    const handleS4b1 = (e) => {
        setS4b1(e.target.value);
    }

    useEffect(() => {
        setS4b2b1(s4b2b1Data.map((element, i) => {
            if (element) {
                return i;
            }
        }).filter((e)=>e).toString());
    }, [s4b2b1Data])
    const handleS4b2b1 = (e) => {
        setS4b2b1Data(s4b2b1Data.map((element, i) => {
            if (i === Number(e.target.name)) {
                return !element;
            } else {
                return element;
            }
        }))
    }

    const handleS4b2b2 = (e) => {
        setS4b2b2(e.target.value);
    }

    const validateAllWritten = () => {
        if (
            s4b1 === ''
        ) {
            return false;
        }

        if (s4b1 === '1')
            if (s4b2b1 === '' || s4b2b2 === '')
                return false;

        return true;
    }

    const saveSector4Data = () => {
        const sector4DataObject = {
            's4b1': s4b1,
            's4b2b1': s4b2b1,
            's4b2b2': s4b2b2
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
            <TitleBlock>4. 스마트팜 수요</TitleBlock>

            <QuestionBlock title={<div>4-1. 귀하께서는 현재 스마트팜을 하고 계십니까?</div>}
                           gridColumnProperty={"repeat(2,1fr)"}
                           onChange={handleS4b1}
            >
                <FormControlLabel value='1' control={<Radio/>} label='예'/>
                <FormControlLabel value='2' control={<Radio/>} label='아니오'/>
            </QuestionBlock>

            {
                s4b1 === '1' &&
                <>
                    <strong><em>※ 3-1.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>4-2-1. 현재 귀하께서는 어떤 종류의 스마트팜을 하고 계십니까? (중복응답 가능)</div>}
                                   gridColumnProperty={"repeat(2,1fr)"}
                    >
                        <FormControlLabel control={<Checkbox name='1' checked={s4b2b1Data[1]} onChange={handleS4b2b1}/>}
                                          label='시설원예 스마트팜'/>
                        <FormControlLabel control={<Checkbox name='2' checked={s4b2b1Data[2]} onChange={handleS4b2b1}/>}
                                          label='과수 스마트팜'/>
                        <FormControlLabel control={<Checkbox name='3' checked={s4b2b1Data[3]} onChange={handleS4b2b1}/>}
                                          label='노지 스마트팜'/>
                        <FormControlLabel control={<Checkbox name='4' checked={s4b2b1Data[4]} onChange={handleS4b2b1}/>}
                                          label='스마트 축사'/>
                    </QuestionBlock>

                    <strong><em>※ 3-1.문항에서 1번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>4-2-2. 귀하의 차후 스마트팜(시설 또는 면적) 수요에 대한 질문입니다. 해당하는 번호를 선택해주세요.</div>}
                                   gridColumnProperty={"repeat(1,1fr)"}
                                   onChange={handleS4b2b2}
                    >
                        <FormControlLabel value='1' control={<Radio/>} label='스마트팜 시설과 면적 모두 유지한다'/>
                        <FormControlLabel value='2' control={<Radio/>} label='스마트팜 시설은 확충하고 면적은 유지한다'/>
                        <FormControlLabel value='3' control={<Radio/>} label='스마트팜 시설은 유지하고 면적은 확대한다'/>
                        <FormControlLabel value='4' control={<Radio/>} label='스마트팜 시설과 면적 모두 늘린다'/>
                    </QuestionBlock>
                </>
            }

            <SectorFooter sector={4} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Sector4;