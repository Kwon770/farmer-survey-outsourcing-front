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
import TextBlock from "../components/TextBlock";
import GridImg from "../components/GridImg";

const Sector3 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem('sector3') === null) {
    //         movePreviousSector();
    //     }
    // }, [])


    const [s3b1, setS3b1] = useState('');

    const [s3b2_1, setS3b2_1] = useState('');
    const [s3b2_2, setS3b2_2] = useState('');
    const [s3b2_3, setS3b2_3] = useState('');
    const [s3b2_4, setS3b2_4] = useState('');
    const [s3b2_5, setS3b2_5] = useState('');
    const [s3b2_6, setS3b2_6] = useState('');
    const [s3b2_7, setS3b2_7] = useState('');
    const [s3b2_8, setS3b2_8] = useState('');

    const [s3b3_1, setS3b3_1] = useState('');
    const [s3b3_2, setS3b3_2] = useState('');
    const [s3b3_3, setS3b3_3] = useState('');
    const [s3b3_4, setS3b3_4] = useState('');
    const [s3b3_5, setS3b3_5] = useState('');
    const [s3b3_6, setS3b3_6] = useState('');
    const [s3b3_7, setS3b3_7] = useState('');
    const [s3b3_8, setS3b3_8] = useState('');
    const [s3b3_9, setS3b3_9] = useState('');
    const [s3b3_10, setS3b3_10] = useState('');
    const [s3b3_11, setS3b3_11] = useState('');

    const [s3b4, setS3b4] = useState('');

    const [s3b4b1, setS3b4b1] = useState('');

    const [s3b4b2_1, setS3b4b2_1] = useState('');
    const [s3b4b2_2, setS3b4b2_2] = useState('');
    const [s3b4b2_3, setS3b4b2_3] = useState('');
    const [s3b4b2_4, setS3b4b2_4] = useState('');

    const [s3b4b3, setS3b4b3] = useState('');
    const [s3b4b4, setS3b4b4] = useState('');

    const [s3b5, setS3b5] = useState('');
    const [s3b6, setS3b6] = useState('');
    const [s3b7, setS3b7] = useState('');


    const handleS3b1 = (e) => {
        setS3b1(e.target.value);
    }


    const handleS3b2_1 = (e) => {
        setS3b2_1(e.target.value);
    }
    const handleS3b2_2 = (e) => {
        setS3b2_2(e.target.value);
    }
    const handleS3b2_3 = (e) => {
        setS3b2_3(e.target.value);
    }
    const handleS3b2_4 = (e) => {
        setS3b2_4(e.target.value);
    }
    const handleS3b2_5 = (e) => {
        setS3b2_5(e.target.value);
    }
    const handleS3b2_6 = (e) => {
        setS3b2_6(e.target.value);
    }
    const handleS3b2_7 = (e) => {
        setS3b2_7(e.target.value);
    }
    const handleS3b2_8 = (e) => {
        setS3b2_8(e.target.value);
    }


    const handleS3b3_1 = (e) => {
        setS3b3_1(e.target.value);
    }
    const handleS3b3_2 = (e) => {
        setS3b3_2(e.target.value);
    }
    const handleS3b3_3 = (e) => {
        setS3b3_3(e.target.value);
    }
    const handleS3b3_4 = (e) => {
        setS3b3_4(e.target.value);
    }
    const handleS3b3_5 = (e) => {
        setS3b3_5(e.target.value);
    }
    const handleS3b3_6 = (e) => {
        setS3b3_6(e.target.value);
    }
    const handleS3b3_7 = (e) => {
        setS3b3_7(e.target.value);
    }
    const handleS3b3_8 = (e) => {
        setS3b3_8(e.target.value);
    }
    const handleS3b3_9 = (e) => {
        setS3b3_9(e.target.value);
    }
    const handleS3b3_10 = (e) => {
        setS3b3_10(e.target.value);
    }
    const handleS3b3_11 = (e) => {
        setS3b3_11(e.target.value);
    }

    const handleS3b4 = ({target: {value}}) => {
        setS3b4(value);

        if (value !== '1' || value !== '2')
            resetS3b4_12s();
    }
    const resetS3b4_12s = () => {
        setS3b4b1('');

        setS3b4b2_1('');
        setS3b4b2_2('');
        setS3b4b2_3('');
        setS3b4b2_4('');

        setS3b4b3('');

        resetS3b4b3_23s();

        setS3b5('');
        setS3b6('');
        setS3b7('');
    }

    const handleS3b4b1 = (e) => {
        setS3b4b1(e.target.value);
    }

    const handleS3b4b2_1 = (e) => {
        setS3b4b2_1(e.target.value);
    }
    const handleS3b4b2_2 = (e) => {
        setS3b4b2_2(e.target.value);
    }
    const handleS3b4b2_3 = (e) => {
        setS3b4b2_3(e.target.value);
    }
    const handleS3b4b2_4 = (e) => {
        setS3b4b2_4(e.target.value);
    }

    const handleS3b4b3 = (e) => {
        setS3b4b3(e.target.value);

        if (e.target.value === '1')
            resetS3b4b3_23s();
    }
    const resetS3b4b3_23s = () => {
        setS3b4b4('');
    }

    const handleS3b4b4 = (e) => {
        setS3b4b4(e.target.value);
    }

    const handleS3b5 = (e) => {
        setS3b5(e.target.value);
    }
    const handleS3b6 = (e) => {
        setS3b6(e.target.value);
    }
    const handleS3b7 = (e) => {
        setS3b7(e.target.value);
    }


    const validateAllWritten = () => {
        if (
            s3b1 === '' ||
            s3b2_1 === '' || s3b2_2 === '' || s3b2_3 === '' || s3b2_4 === '' || s3b2_5 === '' || s3b2_6 === '' || s3b2_7 === '' || s3b2_8 === '' ||
            s3b3_1 === '' || s3b3_2 === '' || s3b3_3 === '' || s3b3_4 === '' || s3b3_5 === '' || s3b3_6 === '' || s3b3_7 === '' || s3b3_8 === '' || s3b3_9 === '' || s3b3_10 === '' || s3b3_11 === '' ||
            s3b4 === '' ||
            s3b5 === '' ||
            s3b6 === '' ||
            s3b7 === ''
        ) {
            return false;
        }


        if (s3b4 === '1' || s3b4 === '2') {
            if (
                s3b4b1 === '' ||
                s3b4b2_1 === '' || s3b4b2_2 === '' || s3b4b2_3 === '' || s3b4b2_4 === '' ||
                s3b4b3 === ''
            ) {
                return false;
            }

            if (s3b4b3 === '2' || s3b4b3 === '3')
                if (s3b4b4 === '')
                    return false;
        }


        return true;
    }

    const saveSector3Data = () => {
        const sector3DataObject = {
            's3b1': s3b1,
            's3b2_1': s3b2_1,
            's3b2_2': s3b2_2,
            's3b2_3': s3b2_3,
            's3b2_4': s3b2_4,
            's3b2_5': s3b2_5,
            's3b2_6': s3b2_6,
            's3b2_7': s3b2_7,
            's3b2_8': s3b2_8,
            's3b3_1': s3b3_1,
            's3b3_2': s3b3_2,
            's3b3_3': s3b3_3,
            's3b3_4': s3b3_4,
            's3b3_5': s3b3_5,
            's3b3_6': s3b3_6,
            's3b3_7': s3b3_7,
            's3b3_8': s3b3_8,
            's3b3_9': s3b3_9,
            's3b3_10': s3b3_10,
            's3b3_11': s3b3_11,
            's3b4': s3b4,
            's3b4b1': s3b4b1,
            's3b4b2_1': s3b4b2_1,
            's3b4b2_2': s3b4b2_2,
            's3b4b2_3': s3b4b2_3,
            's3b4b2_4': s3b4b2_4,
            's3b4b3': s3b4b3,
            's3b4b4': s3b4b4,
            's3b5': s3b5 === '8' ? '8,' + s3b5_Etc8 : s3b5,
            's3b6': s3b6,
            's3b7': s3b7,
        }

        localStorage.setItem('sector3', JSON.stringify(sector3DataObject))
    }

    const movePreviousSector = () => {
        navigate('/2');
    }
    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector3Data()
        navigate('/4')
    }

    return (
        <Background>
            <TitleBlock>
                3. 농업 스타트업단지 조성사업 참여 의향
            </TitleBlock>

            <TextBlock>
                <strong><em>농업 스타트업단지 조성사업</em></strong>
                <br/>
                <br/>

                농업 스타트업단지는 <strong><em>청년농업인의 영농기반을 마련하여 농촌에 안정적으로 정착하고 농지확보 어려움을 해결하고자,
                저활용 농지(유휴농지, 국·공유지 및 매입비축농지)를 활용해 특수작물 재배 및 시설영농이 가능하도록 10~20ha 규모의 단지에 생산기반시설을 구축</em></strong>한 다음,
                인접 시군의 청년농업인에게 임 대·분양(1인당 상한 규모 설정)하는 것을 목적으로 설계되었습니다. 다만, 논에서의 벼재배는 해당 사업의 지원대상으로 고려하지 않고 있습니다.
                아래 의 설문문항을 통해 농업 스타트업단지에 대한 귀하의 견해를 듣고자 합니다.
            </TextBlock>


            <QuestionBlock title={<div>3-1. 귀하께서는 확장, 이주, 신규 부지로서 농업 스타트업단지가 필요하다고 생각하십니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS3b1}>
                        <Grid gridColumnProperty={"repeat(5,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='매우 필요함'/>
                            <FormControlLabel value='2' control={<Radio/>} label='대체로 필요함'/>
                            <FormControlLabel value='3' control={<Radio/>} label='보통'/>
                            <FormControlLabel value='4' control={<Radio/>} label={<div>그다지<br/>필요없음</div>}/>
                            <FormControlLabel value='5' control={<Radio/>} label='전혀 필요 없음'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            <QuestionBlock
                title={<div>3-2. 귀하께서는 농업 스타트업단지 내 농업기반시설 외 필요한 시설은 무엇이라고 생각하십니까? 다음 시설들에 대해서 5점 척도로 응답해 주세요.</div>}>
                <FormControl fullWidth>

                    <Grid strict gridColumnProperty={'5fr 1fr 1fr 1fr 1fr 1fr'} columnGap={6}>
                        <ColorCenterBlock></ColorCenterBlock>
                        <ColorCenterBlock>전혀<br/>필요없다<br/>(1점)</ColorCenterBlock>
                        <ColorCenterBlock>필요없다<br/>(2점)</ColorCenterBlock>
                        <ColorCenterBlock>보통이다<br/>(3점)</ColorCenterBlock>
                        <ColorCenterBlock>필요하다<br/>(4점)</ColorCenterBlock>
                        <ColorCenterBlock>매우<br/>필요하다<br/>(5점)</ColorCenterBlock>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>1. 생산품 가공시설</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b2_1}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>2. 물류시설 (보관창고 등)</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b2_2}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>3. 영농 교육훈련 및 홍보시설</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b2_3}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>4. 커뮤니티 공간</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b2_4}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>5. 공동 작업장</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b2_5}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>6. 판매장 (로컬푸드매장 등)</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b2_6}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>7. 기초 기반시설 (주차장 등)</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b2_7}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>8. 외부인 방문·이용 가능 여가시설</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b2_8}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                </FormControl>
            </QuestionBlock>


            <QuestionBlock
                title={<div>3-3. 귀하께서는 농업 스타트업단지가 갖추어야 할 조건은 무엇이라고 생각하십니까? 다음 조건들에 대해서 5점 척도로 응답해 주세요.</div>}>
                <FormControl fullWidth>

                    <Grid strict gridColumnProperty={'5fr 1fr 1fr 1fr 1fr 1fr'} columnGap={6}>
                        <ColorCenterBlock></ColorCenterBlock>
                        <ColorCenterBlock>전혀<br/>필요없다<br/>(1점)</ColorCenterBlock>
                        <ColorCenterBlock>필요없다<br/>(2점)</ColorCenterBlock>
                        <ColorCenterBlock>보통이다<br/>(3점)</ColorCenterBlock>
                        <ColorCenterBlock>필요하다<br/>(4점)</ColorCenterBlock>
                        <ColorCenterBlock>매우<br/>필요하다<br/>(5점)</ColorCenterBlock>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>1. 저렴한 저가 및 임대료</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_1}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>2. 금융(대출 및 담보) 및 세제 지원</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_2}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>3. 영농 기술 및 정보 획득 용이</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_3}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>4. 인력 및 근로·복지 지원</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_4}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>5. 복토 등 양호한 토질 여건</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_5}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>6. 스타트업 커뮤니티·조직화 지원</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_6}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>7. 시장확보의 용이성</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_7}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>8. 거주지와의 인접성</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_8}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>9. 인접도로와의 연결성</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_9}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>10. 농로 구축</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_10}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                    <Grid strict gridColumnProperty={'5fr 0.5fr 5fr'}>
                        <CenterBox start>11. 용이한 용·배수 여건</CenterBox>
                        <div></div>
                        <RadioGroup onChange={handleS3b3_11}>
                            <Grid strict gridColumnProperty={'repeat(5, 1fr)'} columnGap={27}>
                                <FormControlLabel value='1' control={<Radio/>} label={''}/>
                                <FormControlLabel value='2' control={<Radio/>} label={''}/>
                                <FormControlLabel value='3' control={<Radio/>} label={''}/>
                                <FormControlLabel value='4' control={<Radio/>} label={''}/>
                                <FormControlLabel value='5' control={<Radio/>} label={''}/>
                            </Grid>
                        </RadioGroup>
                    </Grid>

                </FormControl>
            </QuestionBlock>


            <QuestionBlock title={<div>3-4 귀하께서는 농업 스타트업 단지에 입주하실 의향이 있으십니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS3b4}>
                        <Grid gridColumnProperty={"repeat(5,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label={<div>적극적으로<br/>입주할 것임</div>}/>
                            <FormControlLabel value='2' control={<Radio/>} label={<div>입주를 고려할<br/>것 같음</div>}/>
                            <FormControlLabel value='3' control={<Radio/>} label={'보통'}/>
                            <FormControlLabel value='4' control={<Radio/>} label={<div>임주를 고려할<br/>것 같지 않음</div>}/>
                            <FormControlLabel value='5' control={<Radio/>} label={'전혀 없음'}/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s3b4 === '1' || s3b4 === '2') &&
                <>
                    <strong><em>※ 3-4.문항에서 1, 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>3-4-1. 귀하의 농업 스타트업단지 입주 혹은 이전을 희망하는 시기는 언제입니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b4b1}>
                                <Grid gridColumnProperty={"repeat(5,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label={<div>단지 조성 후<br/>즉시</div>}/>
                                    <FormControlLabel value='2' control={<Radio/>} label={'1년 이내'}/>
                                    <FormControlLabel value='3' control={<Radio/>} label={'3년 이내'}/>
                                    <FormControlLabel value='4' control={<Radio/>} label={'5년 이내'}/>
                                    <FormControlLabel value='5' control={<Radio/>} label={'시기 상관없음'}/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    <QuestionBlock title={
                        <>
                            <div>3-4-2. 귀하께서는 농업 스타트업단지에 입주하신다면, 재배를 희망하는 작물 부문과 영농형태는 무엇입니까?</div>
                            <br/>
                            <strong><em>※ 아래 4개 질문(1순위 재배 희망작물, 희망 영농형태, 영농계획 규모, 스마트팜 추진 여부)에 모두 답변해주세요.</em></strong>
                        </>}
                    >
                        <QuestionBlock title={<ColorCenterBlock>1순위 재배 희망작물</ColorCenterBlock>}>
                            <FormControl fullWidth>
                                <RadioGroup onChange={handleS3b4b2_1}>
                                    <Grid gridColumnProperty={"repeat(5,1fr)"}>
                                        <FormControlLabel value='1' control={<Radio/>} label='맥류·잡곡'/>
                                        <FormControlLabel value='2' control={<Radio/>} label='두류'/>
                                        <FormControlLabel value='3' control={<Radio/>} label='서류'/>
                                        <FormControlLabel value='4' control={<Radio/>} label='양념채소'/>
                                        <FormControlLabel value='5' control={<Radio/>} label='엽근채소'/>
                                        <FormControlLabel value='6' control={<Radio/>} label='과채'/>
                                        <FormControlLabel value='7' control={<Radio/>} label='과수'/>
                                        <FormControlLabel value='8' control={<Radio/>} label='화훼'/>
                                        <FormControlLabel value='9' control={<Radio/>} label='특용작물'/>
                                        <FormControlLabel value='10' control={<Radio/>} label='축산'/>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </QuestionBlock>

                        <QuestionBlock title={<ColorCenterBlock>희망 영농형태</ColorCenterBlock>}>
                            <FormControl fullWidth>
                                <RadioGroup onChange={handleS3b4b2_2}>
                                    <Grid gridColumnProperty={"repeat(4,1fr)"}>
                                        <FormControlLabel value='1' control={<Radio/>} label='노지(밭) 재배'/>
                                        <FormControlLabel value='2' control={<Radio/>} label='과수원'/>
                                        <FormControlLabel value='3' control={<Radio/>} label={<CenterBox>시설원예<br/>(단동 비닐하우스)</CenterBox>}/>
                                        <FormControlLabel value='4' control={<Radio/>} label={<CenterBox>시설원예<br/>(연동 비닐하우스)</CenterBox>}/>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </QuestionBlock>

                        <QuestionBlock title={<ColorCenterBlock>영농계획 규모 (1인당 상한이 3,000평일 경우 가정)</ColorCenterBlock>}>
                            <FormControl fullWidth>
                                <RadioGroup onChange={handleS3b4b2_3}>
                                    <Grid gridColumnProperty={"repeat(5,1fr)"}>
                                        <FormControlLabel value='1' control={<Radio/>} label='300평'/>
                                        <FormControlLabel value='2' control={<Radio/>} label='500평'/>
                                        <FormControlLabel value='3' control={<Radio/>} label='1,000평'/>
                                        <FormControlLabel value='4' control={<Radio/>} label='2,000평'/>
                                        <FormControlLabel value='5' control={<Radio/>} label='3,000평'/>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </QuestionBlock>

                        <QuestionBlock title={<ColorCenterBlock>스마트팜 추진 여부</ColorCenterBlock>}>
                            <FormControl fullWidth>
                                <RadioGroup onChange={handleS3b4b2_4}>
                                    <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                        <FormControlLabel value='1' control={<Radio/>} label='예'/>
                                        <FormControlLabel value='2' control={<Radio/>} label='아니오'/>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </QuestionBlock>

                    </QuestionBlock>


                    <QuestionBlock title={<div>3-4-3. 귀하께서는 농업 스타트업단지에 입주하신다면, 분양, 임대, 임대 후 분양 중 어느 것을 선호하십니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b4b3}>
                                <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='분양'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='임대'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='임대 후 분양'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    {
                        (s3b4b3 === '2' || s3b4b3 === '3') &&
                        <>
                            <strong><em>※ 3-4-3.문항에서 2번과 3번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                            <QuestionBlock title={<div>3-4-4. 귀하께서는 농업 스타트업 단지의 임대 기간은 어느 정도가 적당하다고 생각하십니까?</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS3b4b4}>
                                        <Grid gridColumnProperty={"repeat(6,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='3년 이내'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='5년'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='7년'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='10년'/>
                                            <FormControlLabel value='5' control={<Radio/>} label='15년'/>
                                            <FormControlLabel value='6' control={<Radio/>} label='20년'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>
                        </>
                    }


                    <QuestionBlock
                        title={<div>3-5. 귀하께서는 농업 스타트업단지에 입주하신다면, 거주지에서 몇 분 이내의 통작거리까지 고려할 의 향이 있으십니까? <em>(※ 승용차 편도 기준)</em></div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b5}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='10분 이내'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='20분 이내'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='30분 이내'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='40분 이내'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='50분 이내'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='1시간 이내'/>
                                    <FormControlLabel value='7' control={<Radio/>} label='통작 시간은 중요하지 않음'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    <QuestionBlock title={<div>3-6. 농업 스타트업단지가 거주지와 인접한 타 시·군에 설립되어도 <em>상기 문항(3-5)에서</em> 응답한 통작거 리 이내에 위치할 경우, 입주하실 의향은 변함이 없습니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b6}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='의향 변함 없음 (입주할 것임)'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='의향 변함 (입주하지 않을 것임)'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    <QuestionBlock title={<div>
                        3-7. 스타트업 단지 내 아래와 같은 단동형·연동형 비닐하우스를 설치할 수 있다면(철골 유리·경질 판·비닐 온실은 설치 불가), 자부담 비율은 어느 정도가 적정하다고 생각하십니까? <strong><em>(※자부담 외는 국고·지방비 보조)</em></strong>
                    </div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS3b7}>
                                <Grid gridColumnProperty={"repeat(5,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='30%'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='40%'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='50%'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='60%'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='70%'/>
                                </Grid>
                            </RadioGroup>

                            <Grid strict gridColumnProperty={"repeat(2, 1fr)"} columnGap={10} rowGap={5} margin={'20px 0px'}>
                                <CenterBox>단동형 비닐 온실 (설치비: 약 8억/ha)</CenterBox>
                                <CenterBox>연동형 비닐 온실 (설치비: 약 13억/ha)</CenterBox>

                                <GridImg src={'images/3-7_1.png'}/>
                                <GridImg src={'images/3-7_2.png'}/>

                                <div></div>
                            </Grid>
                            <div>※ 설치비용은 참고사항이며 온실사양에 따라 달라질 수 있음.</div>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <SectorFooter sector={3} movePreviousSector={movePreviousSector} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Sector3;