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

const Pector2 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);

    const [s2b1, setS2b1] = useState('');

    const [s2b2, setS2b2] = useState('');
    const [s2b2b1, setS2b2b1] = useState('');

    const [s2b2b2_1, setS2b2b2_1] = useState('');
    const [s2b2b2_2, setS2b2b2_2] = useState('');
    const [s2b2b2_3, setS2b2b2_3] = useState('');

    const [s2b2b3, setS2b2b3] = useState('');
    const [s2b2b4, setS2b2b4] = useState('');
    const [s2b2b5, setS2b2b5] = useState('');
    const [s2b2b5_Etc8, setS2b2b5_Etc8] = useState('');
    const [s2b2b6, setS2b2b6] = useState('');

    const [s2b3_1, setS2b3_1] = useState('');
    const [s2b3_2, setS2b3_2] = useState('');
    const [s2b3_Etc9, setS2b3_Etc9] = useState('');
    const [s2b3_Etc10, setS2b3_Etc10] = useState('');
    const [s2b3Data, setS2b3Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false, // 9
        false, // 10
    ]);

    const [s2b4_1, setS2b4_1] = useState('');
    const [s2b4_2, setS2b4_2] = useState('');
    const [s2b4_3, setS2b4_3] = useState('');
    const [s2b4_Etc12, setS2b4_Etc12] = useState('');
    const [s2b4_Etc13, setS2b4_Etc13] = useState('');
    const [s2b4_Etc14, setS2b4_Etc14] = useState('');
    const [s2b4Data, setS2b4Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false, // 12
        false,
        false // 14
    ]);

    const [s2b5, setS2b5] = useState('');


    // useEffect(() => {
    //     if (localStorage.getItem('sector1') === null) {
    //         movePreviousSector();
    //     }
    // }, [])


    const handleS2b1 = (e) => {
        setS2b1(e.target.value);
    }

    const handleS2b2 = ({target: {value}}) => {
        setS2b2(value);
        if (value !== '1' && value !== '2') {
            setS2b2b1('');
            setS2b2b2_1('');
            setS2b2b2_2('');
            setS2b2b2_3('');
            setS2b2b3('');
            setS2b2b4('');
            setS2b2b5('');
            setS2b2b6('');
        }
    }
    const handleS2b2b1 = (e) => {
        setS2b2b1(e.target.value);
    }

    const handleS2b2b2_1 = (e) => {
        setS2b2b2_1(e.target.value);
    }
    const handleS2b2b2_2 = (e) => {
        setS2b2b2_2(e.target.value);
    }
    const handleS2b2b2_3 = (e) => {
        setS2b2b2_3(e.target.value);
    }

    const handleS2b2b3 = ({target: {value}}) => {
        setS2b2b3(value);
        if (value !== '2') {
            setS2b2b4('');
        }
    }
    const handleS2b2b4 = (e) => {
        setS2b2b4(e.target.value);
    }
    const handleS2b2b5 = (e) => {
        setS2b2b5(e.target.value);
    }
    const handleS2b2b6 = (e) => {
        setS2b2b6(e.target.value);
    }

    const handleS2b3 = (e) => {
        // 2개 선택 유효성 확인
        let checking = false;
        let checkable = s2b3_1 === '' || s2b3_2 === '';
        s2b3Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 2개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS2b3Data(s2b3Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s2b3_1 === '') setS2b3_1(e.target.name);
            else setS2b3_2(e.target.name);
        } else {
            if (s2b3_1 === e.target.name) setS2b3_1('');
            else setS2b3_2('');
        }
    }

    const handleS2b4 = (e) => {
        // 3개 선택 유효성 확인
        let checking = false;
        let checkable = s2b4_1 === '' || s2b4_2 === '' || s2b4_3 === '';
        s2b4Data.forEach((b, idx) => {
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        // 3개 이미 선택시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS2b4Data(s2b4Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))

        if (checking) {
            if (s2b4_1 === '') setS2b4_1(e.target.name);
            else if (s2b4_2 === '') setS2b4_2(e.target.name);
            else setS2b4_3(e.target.name);
        } else {
            if (s2b4_1 === e.target.name) setS2b4_1('');
            else if (s2b4_2 === e.target.name) setS2b4_2('');
            else setS2b4_3('');
        }
    }


    const validateAllWritten = () => {
        if (
            s2b1 === '' ||
            s2b2 === '' ||
            s2b3_1 === '' || s2b3_2 === '' ||
            s2b4_1 === '' || s2b4_2 === '' || s2b4_3 === ''
        ) {
            return false;
        }

        if (s2b2 === '1' || s2b2 === '2')
            if (
                s2b2b1 === '' ||
                s2b2b2_1 === '' || s2b2b2_2 === '' || s2b2b2_3 === '' ||
                s2b2b3 === '' ||
                s2b2b5 === '' ||
                s2b2b6 === ''
            ) {
                return false;
            }

        if (s2b2b3 === '2')
            if (s2b2b4 === '')
                return false;

        if (s2b2b5 === '8')
            if (s2b2b5_Etc8 === '')
                return false;

        if (s2b3_1 === '9' || s2b3_2 === '9')
            if (s2b3_Etc9 === '')
                return false;

        if (s2b3_1 === '10' || s2b3_2 === '10')
            if (s2b3_Etc10 === '')
                return false;

        if (s2b4_1 === '12' || s2b4_2 === '12' || s2b4_3 === '12')
            if (s2b4_Etc12 === '')
                return false;

        if (s2b4_1 === '13' || s2b4_2 === '13' || s2b4_3 === '13')
            if (s2b4_Etc13 === '')
                return false;

        if (s2b4_1 === '14' || s2b4_2 === '14' || s2b4_3 === '14')
            if (s2b4_Etc14 === '')
                return false;

        return true;
    }

    const saveSector2Data = () => {
        const sector2DataObject = {
            's2b1': s2b1,
            's2b2': s2b2,
            's2b2b1': s2b2b1,
            's2b2b2_1': s2b2b2_1,
            's2b2b2_2': s2b2b2_2,
            's2b2b2_3': s2b2b2_3,
            's2b2b3': s2b2b3,
            's2b2b4': s2b2b4,
            's2b2b5': s2b2b5 === '8' ? '8,' + s2b2b5_Etc8 : s2b2b5,
            's2b2b6': s2b2b6,
            's2b3_1': s2b3_1 === '9' ? '9,' + s2b3_Etc9 : (s2b3_1 === '10' ? '10,' + s2b3_Etc10 : s2b3_1),
            's2b3_2': s2b3_2 === '9' ? '9,' + s2b3_Etc9 : (s2b3_2 === '10' ? '10,' + s2b3_Etc10 : s2b3_2),
            's2b4_1': s2b4_1 === '12' ? '12,' + s2b4_Etc12 : (s2b4_1 === '13' ? '13,' + s2b4_Etc13 : (s2b4_1 === '14' ? '14,' + s2b4_Etc14 : s2b4_1)),
            's2b4_2': s2b4_2 === '12' ? '12,' + s2b4_Etc12 : (s2b4_2 === '13' ? '13,' + s2b4_Etc13 : (s2b4_2 === '14' ? '14,' + s2b4_Etc14 : s2b4_2)),
            's2b4_3': s2b4_3 === '12' ? '12,' + s2b4_Etc12 : (s2b4_3 === '13' ? '13,' + s2b4_Etc13 : (s2b4_3 === '14' ? '14,' + s2b4_Etc14 : s2b4_3)),
            's2b5': s2b5
        }

        localStorage.setItem('sector2', JSON.stringify(sector2DataObject))
    }

    const movePreviousSector = () => {
        navigate('/1');
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
                2. 농업 스타트업단지 조성사업 참여 의향
            </TitleBlock>

            <TextBlock>
                <strong><em>농업 스타트업단지 조성사업</em></strong>
                <br/>
                <br/>

                농업 스타트업 단지는 청년농업인의 영농기반을 마련하여 농촌에 안정적 으로 정착하고 농지확보 어려움을 해결하고자 저활용 농지(유휴농지, 국·공유지 및 매입비축농지)를 활용해 특수작물 재배
                및 시설영농(스마 트팜 포함)이 가능하도록 생산기반시설을 구축(가공.판매시설 포함)하여 단지를 조성하여 임대 및 분양을 목적으로 설계되었습니다. 아래의 설문 문항을 통해 농업
                스타트업단지에 대한 귀하의 고견을 듣고자 합니다.
            </TextBlock>


            <QuestionBlock title={<div>2-1. 귀하께서는 확장, 이주, 신규 부지로서 농업 스타트업단지가 필요하다고 생각하십니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS2b1}>
                        <Grid gridColumnProperty={"repeat(5,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='매우 필요함'/>
                            <FormControlLabel value='2' control={<Radio/>} label='대체로 필요함'/>
                            <FormControlLabel value='3' control={<Radio/>} label='모르겠음'/>
                            <FormControlLabel value='4' control={<Radio/>} label={<CenterBox>그다지<br/>필요없음</CenterBox>}/>
                            <FormControlLabel value='5' control={<Radio/>} label='전혀 필요 없음'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            <QuestionBlock title={<div>2-2. 귀하께서는 농업 스타트업단지에 입주하실 의향이 있으십니까?</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS2b2}>
                        <Grid gridColumnProperty={"repeat(5,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label={<CenterBox>적극적으로<br/>입주할 것임</CenterBox>}/>
                            <FormControlLabel value='2' control={<Radio/>} label='입주를 고려할 것 같음'/>
                            <FormControlLabel value='3' control={<Radio/>} label='모르겠음'/>
                            <FormControlLabel value='4' control={<Radio/>} label='입주를 고려할 것 같지 않음'/>
                            <FormControlLabel value='5' control={<Radio/>} label='전혀 없음'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </QuestionBlock>


            {
                (s2b2 === '1' || s2b2 === '2') &&
                <>
                    <strong><em>※ 2-2.문항에서 1, 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-2-1. 귀하의 농업 스타트업단지 입주 혹은 이전을 희망하는 시기는 언제입니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS2b2b1}>
                                <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='단지 조성 후 즉시'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='1년 이내'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='3년 이내'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='5년 이내'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='시기 상관없음'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    <strong><em>※ 2-2.문항에서 1, 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={
                        <>
                            <div>2-2-2. 귀하께서는 농업 스타트업단지에 입주하신다면, 재배를 희망하는 작물 부문과 영농형태는 무엇입니까?</div>
                            <br/>
                            <strong><em>※ 아래 3개 질문(재배희망작물, 영농형태, 스마트팜 여부)에 모두 답변해주세요.</em></strong>
                        </>}
                    >
                            <QuestionBlock title={<ColorCenterBlock>재배희망작물</ColorCenterBlock>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS2b2b2_1}>
                                        <Grid gridColumnProperty={"repeat(5,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='미곡'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='맥류'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='잡곡'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='두류'/>
                                            <FormControlLabel value='5' control={<Radio/>} label='서류'/>
                                            <FormControlLabel value='6' control={<Radio/>} label='채소'/>
                                            <FormControlLabel value='7' control={<Radio/>} label='과수'/>
                                            <FormControlLabel value='8' control={<Radio/>} label='화훼'/>
                                            <FormControlLabel value='9' control={<Radio/>} label='특용작물'/>
                                            <FormControlLabel value='10' control={<Radio/>} label='축산'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>

                            <QuestionBlock title={<ColorCenterBlock>영농형태</ColorCenterBlock>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS2b2b2_2}>
                                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='논'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='밭, 과수'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='축산'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='시설원예'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>

                            <QuestionBlock title={<ColorCenterBlock>스마트팜 여부</ColorCenterBlock>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS2b2b2_3}>
                                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='예'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='아니오'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </QuestionBlock>

                    </QuestionBlock>


                    <strong><em>※ 2-2.문항에서 1, 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-2-3. 귀하께서는 농업 스타트업단지에 입주하신다면, 분양, 임대, 임대 후 분양 중 어느 것을 선호하십니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS2b2b3}>
                                <Grid gridColumnProperty={"repeat(3,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='분양'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='임대'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='임대 후 분양'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                s2b2b3 === '2' &&
                <>
                    <strong><em>※ 2-2-3.문항에서 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-2-4. 귀하께서는 농업 스타트업 단지의 임대 기간은 어느 정도가 적당하다고 생각하십니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS2b2b4}>
                                <Grid gridColumnProperty={"repeat(6,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='3년 이내'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='5년'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='7년'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='10년'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='20년'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='30년'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            {
                (s2b2 === '1' || s2b2 === '2') &&
                <>
                    <strong><em>※ 2-2.문항에서 1, 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock
                        title={<div>2-2-5. 귀하께서는 농업 스타트업단지에 입주하신다면, 거주지에서 몇 분 이내의 통작거리까지 고려할 의향이 있으십니까? <strong><em>(※
                            승용차 편도 기준)</em></strong></div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS2b2b5}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='10분 이내'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='20분 이내'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='30분 이내'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='40분 이내'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='50분 이내'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='1시간 이내'/>
                                    <FormControlLabel value='7' control={<Radio/>} label='통작 시간은 중요하지 않음'/>
                                    <Stack direction='row'>
                                        <FormControlLabel value='8' control={<Radio/>} label='기타'/>
                                        <TextField value={s2b2b5_Etc8}
                                                   onChange={(e) => setS2b2b5_Etc8(e.target.value)} size={'small'}/>
                                    </Stack>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>


                    <strong><em>※ 2-2.문항에서 1, 2번을 선택하신 분의 경우에만 응답해주세요.</em></strong>
                    <QuestionBlock title={<div>2-2-6. 농업 스타트업단지가 거주지와 인접한 타 시·군에 설립되어도 <strong><em>상기 문항(2-2-6.)에서</em></strong> 응답한
                        통 작거리 이내에 위치할 경우, 입주하실 의향은 변함이 없습니까?</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS2b2b6}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='의향 변함 없음 (입주할 것임)'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='의향 변함 (입주하지 않을 것임)'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBlock>
                </>
            }


            <QuestionBlock
                title={<div>2-3. 귀하께서는 농업 스타트업단지 내 농업기반시설 외 필요한 시설은 무엇이라고 생각하십니까? 다음 조건들에서 1, 2순위를 골라주세요.</div>}>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={"repeat(2,1fr)"}>
                        <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;<strong>{s2b3_1}</strong></CenterBox>
                        <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;<strong>{s2b3_2}</strong></CenterBox>

                        <FormControlLabel
                            control={<Checkbox name='1' checked={s2b3Data[1]} onChange={handleS2b3}/>}
                            label='1. 담보 확보'/>
                        <FormControlLabel
                            control={<Checkbox name='2' checked={s2b3Data[2]} onChange={handleS2b3}/>}
                            label='2. 자부담 여력 없음'/>
                        <FormControlLabel
                            control={<Checkbox name='3' checked={s2b3Data[3]} onChange={handleS2b3}/>}
                            label='3. 금리가 비싸다'/>
                        <FormControlLabel
                            control={<Checkbox name='4' checked={s2b3Data[4]} onChange={handleS2b3}/>}
                            label='4. 상환기값이 짧다'/>
                        <FormControlLabel
                            control={<Checkbox name='5' checked={s2b3Data[5]} onChange={handleS2b3}/>}
                            label='5. 융자액이 적다'/>
                        <FormControlLabel
                            control={<Checkbox name='6' checked={s2b3Data[6]} onChange={handleS2b3}/>}
                            label='6, 복잡한 서류 절차'/>
                        <FormControlLabel
                            control={<Checkbox name='7' checked={s2b3Data[7]} onChange={handleS2b3}/>}
                            label='7. 정책자금의 중복 지원 불가'/>
                        <FormControlLabel
                            control={<Checkbox name='8' checked={s2b3Data[8]} onChange={handleS2b3}/>}
                            label='8. 자기자본 풍부'/>
                        <Stack direction='row'>
                            <FormControlLabel
                                control={<Checkbox name='9' checked={s2b3Data[9]} onChange={handleS2b3}/>}
                                label='9. 기타'/>
                            <TextField value={s2b3_Etc9} onChange={(e) => setS2b3_Etc9(e.target.value)} size={'small'}/>
                        </Stack>
                        <Stack direction='row'>
                            <FormControlLabel
                                control={<Checkbox name='10' checked={s2b3Data[10]} onChange={handleS2b3}/>}
                                label='10. 기타'/>
                            <TextField value={s2b3_Etc10} onChange={(e) => setS2b3_Etc10(e.target.value)} size={'small'}/>
                        </Stack>
                    </Grid>
                </FormControl>
            </QuestionBlock>


            <QuestionBlock title={<div>2-4. 귀하께서는 농업 스타트업단지가 갖추어야 할 조건은 무엇이라고 생각하십니까? 다음 조건들에서 1, 2, 3순위를 골라주세요.</div>}>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={"repeat(2,1fr)"}>
                        <CenterBox size={20} weight={500} padding={20}>1순위 :&nbsp;&nbsp;<strong>{s2b4_1}</strong></CenterBox>
                        <CenterBox size={20} weight={500} padding={20}>2순위 :&nbsp;&nbsp;<strong>{s2b4_2}</strong></CenterBox>
                        <CenterBox size={20} weight={500} padding={20}>3순위 :&nbsp;&nbsp;<strong>{s2b4_3}</strong></CenterBox>
                        <div/>

                        <FormControlLabel
                            control={<Checkbox name='1' checked={s2b4Data[1]} onChange={handleS2b4}/>}
                            label='1. 저렴한 지가 및 임대로'/>
                        <FormControlLabel
                            control={<Checkbox name='2' checked={s2b4Data[2]} onChange={handleS2b4}/>}
                            label='2. 금융(대출 및 담보) 및 세제 지원'/>
                        <FormControlLabel
                            control={<Checkbox name='3' checked={s2b4Data[3]} onChange={handleS2b4}/>}
                            label='3. 영농 기술 및 정보 획득 용이'/>
                        <FormControlLabel
                            control={<Checkbox name='4' checked={s2b4Data[4]} onChange={handleS2b4}/>}
                            label='4. 인력 및 근로-복지 지원'/>
                        <FormControlLabel
                            control={<Checkbox name='5' checked={s2b4Data[5]} onChange={handleS2b4}/>}
                            label='5. 복토 등 양호한 토질 여건'/>
                        <FormControlLabel
                            control={<Checkbox name='6' checked={s2b4Data[6]} onChange={handleS2b4}/>}
                            label='6, 스타트업 커뮤니티-조직화 지원'/>
                        <FormControlLabel
                            control={<Checkbox name='7' checked={s2b4Data[7]} onChange={handleS2b4}/>}
                            label='7. 시작확보의 용이성'/>
                        <FormControlLabel
                            control={<Checkbox name='8' checked={s2b4Data[8]} onChange={handleS2b4}/>}
                            label='8. 거주지와의 인접성'/>
                        <FormControlLabel
                            control={<Checkbox name='9' checked={s2b4Data[9]} onChange={handleS2b4}/>}
                            label='9. 인접도로와의 연결성'/>
                        <FormControlLabel
                            control={<Checkbox name='10' checked={s2b4Data[10]} onChange={handleS2b4}/>}
                            label='10. 농로 구축'/>
                        <FormControlLabel
                            control={<Checkbox name='11' checked={s2b4Data[11]} onChange={handleS2b4}/>}
                            label='11. 용이한 용-배수 여건'/>
                        <Stack direction='row'>
                            <FormControlLabel
                                control={<Checkbox name='12' checked={s2b4Data[12]} onChange={handleS2b4}/>}
                                label='12. 기타'/>
                            <TextField value={s2b4_Etc12} onChange={(e) => setS2b4_Etc12(e.target.value)} size={'small'}/>
                        </Stack>
                        <Stack direction='row'>
                            <FormControlLabel
                                control={<Checkbox name='13' checked={s2b4Data[13]} onChange={handleS2b4}/>}
                                label='13. 기타'/>
                            <TextField value={s2b4_Etc13} onChange={(e) => setS2b4_Etc13(e.target.value)} size={'small'}/>
                        </Stack>
                        <Stack direction='row'>
                            <FormControlLabel
                                control={<Checkbox name='14' checked={s2b4Data[14]} onChange={handleS2b4}/>}
                                label='14. 기타'/>
                            <TextField value={s2b4_Etc14} onChange={(e) => setS2b4_Etc14(e.target.value)} size={'small'}/>
                        </Stack>
                    </Grid>
                </FormControl>
            </QuestionBlock>


            <QuestionBlock title={<div>2-5. 향후 귀하의 안정적인 영농을 위해 필요한 농지 지원이나 필요하신 사업이 있으시면 자유롭게 말씀 해 주시기 바랍니다.</div>}>
                <FormControl fullWidth>
                    <TextField value={s2b5} onChange={(e) => setS2b5(e.target.value)} multiline minRows={6}/>
                </FormControl>
            </QuestionBlock>

            <SectorFooter sector={2} movePreviousSector={movePreviousSector} moveNextSector={moveNextSector} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

export default Pector2;