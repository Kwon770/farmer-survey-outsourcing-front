import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import TitleBlock from "../components/TitleBlock";
import SectorFooter from "../components/SectorFooter";
import {Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField} from "@mui/material";
import QuestionBlock from "../components/QuestionBlock";
import Grid from "../components/Grid";
import CenterBox from "../components/CenterBox";

const Sector4 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem('sector4') === null) {
    //         movePreviousSector();
    //     }
    // }, [])


    const [s4b1, setS4b1] = useState('');

    const [s4b2, setS4b2] = useState('');

    const [s4b2b1, setS4b2b1] = useState('');
    const [s4b2b2_1, setS4b2b2_1] = useState('');
    const [s4b2b2_2, setS4b2b2_2] = useState('');
    const [s4b2b2Data, setS4b2b2Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false,
        false // 8
    ])
    const [s4b2b3, setS4b2b3] = useState('');

    const [s4b3, setS4b3] = useState('');



    const handleS4b1 = (e) => {
        setS4b1(e.target.value);

        if (e.target.value === '2') {
            resetS4b1_1s();
        }
    }
    const resetS4b1_1s = () => {
        setS4b2('');

        resetS4b2_13s();
    }

    const handleS4b2 = (e) => {
        setS4b2(e.target.value);

        if (e.target.value === '2') {
            resetS4b2_13s();
        }
    }
    const resetS4b2_13s = () => {
        setS4b2b1('');

        setS4b2b2_1('');
        setS4b2b2_2('');
        setS4b2b2Data(s4b2b2Data.map(() => false));

        setS4b2b3('');
    }

    const handleS4b2b1 = (e) => {
        setS4b2b1(e.target.value);
    }

    const handleS4b2b2 = (e) => {
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s4b2b2_1 === '' || s4b2b2_2 === ''
        s4b2b2Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS4b2b2Data(s4b2b2Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s4b2b2_1 === '') setS4b2b2_1(e.target.name);
            else if (s4b2b2_2 === '') setS4b2b2_2(e.target.name);
        } else {
            if (s4b2b2_1 === e.target.name) setS4b2b2_1('');
            else if (s4b2b2_2 === e.target.name) setS4b2b2_2('');
        }
    }

    const handleS4b2b3 = (e) => {
        setS4b2b3(e.target.value);
    }



    const validateAllWritten = () => {
        if (s4b1 === '') {
            return false;
        }

        if (s4b1 === '1') {
            if (s4b2 === '')
                return false;

            if (s4b2 === '1' || s4b2 === '3') {
                if (
                    s4b2b1 === '' ||
                    s4b2b2_1 === '' || s4b2b2_2 === '' ||
                    s4b2b3 === ''
                ) {
                    return false;
                }
            }
        }


        return true;
    }

    const saveSector4Data = () => {
        const sector4DataObject = {
            's4b1': s4b1,
            's4b2': s4b2,
            's4b2b1': s4b2b1,
            's4b2b2_1': s4b2b2_1,
            's4b2b2_2': s4b2b2_2,
            's4b2b3': s4b2b3,
            's4b3': s4b3
        }

        localStorage.setItem('sector4', JSON.stringify(sector4DataObject))

    }

    const movePreviousSector = () => {
        navigate('/3');
    }

    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector4Data()
        navigate('/00');
        // navigate('/submit');
    }


    return (
        <Background>
            <TitleBlock>
                4. 농지매입 경험
            </TitleBlock>


            <QuestionBlock title={<div>4-1 귀하께서는 농지를 취득한 경험이 있으십니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS4b1}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='예'/>
                            <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s4b1 === '1') &&
                <>
                    <strong><em>※ 4-1.문항에서 1번을 선택하신 분만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>4-2. 귀하께서는 어떤 경로로 농지를 취득하셨습니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS4b2}>
                                <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='개인 간 매매를 통해서'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='농지은행을 통해서'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='1,2번 둘다'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    {
                        (s4b2 === '1' || s4b2 === '3') &&
                        <>
                            <strong><em>※ 4-2.문항에서 1, 3번을 선택하신 분만 응답해주세요.</em></strong>
                            <QuestionBlock title={<div>4-2-1. 개인간 매매로 농지를 취득한 경우 자금을 어떤 방식으로 조달하셨습니까?</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS4b2b1}>
                                        <Grid gridColumnProperty={"repeat(4,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='창업자금(3억) 등 정부융자지원'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='은행 등 금융기관 대출'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='부모님 등 직계가족'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='자기자금'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>


                            <strong><em>※ 4-2.문항에서 1, 3번을 선택하신 분만 응답해주세요.</em></strong>
                            <QuestionBlock title={<div>4-2-2. 농지은행이 아닌 개인간 매매로 농지를 취득하신 주요 요인은 무엇입니까?</div>}>
                                <FormControl fullWidth>
                                    <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                        <FormControlLabel
                                            control={<Checkbox name='1' checked={s4b2b2Data[1]}
                                                               onChange={handleS4b2b2}/>}
                                            label='1. 담보 확보'/>
                                        <FormControlLabel
                                            control={<Checkbox name='2' checked={s4b2b2Data[2]}
                                                               onChange={handleS4b2b2}/>}
                                            label='2. 자부담 여력 없음'/>
                                        <FormControlLabel
                                            control={<Checkbox name='3' checked={s4b2b2Data[3]}
                                                               onChange={handleS4b2b2}/>}
                                            label='3. 금리가 비싸다'/>
                                        <FormControlLabel
                                            control={<Checkbox name='4' checked={s4b2b2Data[4]}
                                                               onChange={handleS4b2b2}/>}
                                            label='4. 상환기간이 짧다'/>
                                        <FormControlLabel
                                            control={<Checkbox name='5' checked={s4b2b2Data[5]}
                                                               onChange={handleS4b2b2}/>}
                                            label='5. 융자액이 적다'/>
                                        <FormControlLabel
                                            control={<Checkbox name='6' checked={s4b2b2Data[6]}
                                                               onChange={handleS4b2b2}/>}
                                            label='6, 복잡한 서류 절차'/>
                                        <FormControlLabel
                                            control={<Checkbox name='7' checked={s4b2b2Data[7]}
                                                               onChange={handleS4b2b2}/>}
                                            label='7. 정책자금의 중복 지원 불가'/>
                                        <FormControlLabel
                                            control={<Checkbox name='8' checked={s4b2b2Data[8]}
                                                               onChange={handleS4b2b2}/>}
                                            label='8. 자기자본 풍부'/>

                                        <CenterBox size={20} weight={500} padding={20}>
                                            1순위 :&nbsp;&nbsp;(&nbsp;<strong>{s4b2b2_1}</strong>&nbsp;)
                                        </CenterBox>
                                        <CenterBox size={20} weight={500} padding={20}>
                                            2순위 :&nbsp;&nbsp;(&nbsp;<strong>{s4b2b2_2}</strong>&nbsp;)
                                        </CenterBox>
                                    </Grid>
                                </FormControl>
                            </QuestionBlock>


                            <strong><em>※ 4-2.문항에서 1, 3번을 선택하신 분만 응답해주세요.</em></strong>
                            <QuestionBlock title={<div>4-2-3. 귀하께서는 개인 간 매매 시 농지가격은 농지은행을 통한 거래 시 가격수준과 비교해 어떠했습니까?</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS4b2b3}>
                                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='매우 낮다(30% 이상)'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='낮은 편이다(10~30%)'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='비슷하다(10% 이내)'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='높은 편이다(10~30%)'/>
                                            <FormControlLabel value='5' control={<Radio/>} label='매우 높다(30% 이상)'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>
                        </>
                    }
                </>
            }


            <QuestionBlock title={<div>4-3. 향후 귀하를 포함한 청년농업인들의 성공적인 영농정착을 위해 ‘농업 스타업단지’를 포함하여 여 타 필요한 농지 관련 지원 제도나 사업에 대한 고견이 있으시면 자유롭게 말씀해 주시기 바랍니다.</div>}>
                <FormControl fullWidth>
                    <TextField value={s4b3} onChange={(e) => setS4b3(e.target.value)} multiline minRows={6}/>
                </FormControl>
            </QuestionBlock>


            <SectorFooter sector={4} movePreviousSector={movePreviousSector} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Sector4;