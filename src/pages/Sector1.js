import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background";
import {
    Checkbox,
    FormControlLabel,
    MenuItem,
    Radio,
    Select, Stack, TextField, FormControl, RadioGroup
} from "@mui/material";
import SmallQuestionBlock from "../components/SmallQuestionBlock";
import CenterBox from "../components/CenterBox";
import TextBlock from "../components/TextBlock";
import TitleBlock from "../components/TitleBlock";
import SectorFooter from "../components/SectorFooter";
import {getAllDosis, getSigungus, getUpmeongdong} from "../api/KoreanLocation";
import Grid from "../components/Grid";

const Sector1 = () => {
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);
    const [s1b1, setS1b1] = useState('');
    const [s1b2, setS1b2] = useState('');

    const [s1b3_1, setS1b3_1] = useState('');
    const [s1b3_2, setS1b3_2] = useState('');
    const [s1b3_3, setS1b3_3] = useState('');
    const [dosis, setDosis] = useState([]);
    const [sigungus, setSigungus] = useState([]);
    const [upmeongdongs, setUpmeongdongs] = useState([]);

    const [s1b4, setS1b4] = useState('');

    const [s1b5, setS1b5] = useState('');
    const [s1b5_1Radio, setS1b5_1Radio] = useState(false);
    const [s1b5_2Radio, setS1b5_2Radio] = useState(false);
    const [s1b5_Etc1, setS1b5_Etc1] = useState('');

    const [s1b6, setS1b6] = useState('');
    const [s1b6Data, setS1b6Data] = useState([
        false, // 0
        false, // 1
        false,
        false,
        false,
        false,
        false  // 6
    ]);

    const [s1b7, setS1b7] = useState('');
    const [s1b7Data, setS1b7Data] = useState([
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
        false, // 10
    ]);

    const [s1b8, setS1b8] = useState('');
    const [s1b9, setS1b9] = useState('');
    const [s1b10, setS1b10] = useState('');

    const [s1b11, setS1b11] = useState('');
    const [s1b11b1, setS1b11b1] = useState('');
    const [s1b11b2, setS1b11b2] = useState('');
    const [s1b11b3, setS1b11b3] = useState('');

    const [s1b12_1, setS1b12_1] = useState('');
    const [s1b12_2, setS1b12_2] = useState('');
    const [s1b12_3, setS1b12_3] = useState('');

    const handleS1b1 = (e) => {
        setS1b1(e.target.value);
    }
    const handleS1b2 = (e) => {
        setS1b2(e.target.value);
    }

    const getDosis = async () => {
        setDosis(await getAllDosis());
    }
    useEffect(() => {
        getDosis();
    }, []);
    const handleS1b3_1 = async (e) => {
        setS1b3_1(e.target.value);
        const dosiCode = dosis[e.target.value].code;
        setSigungus(await getSigungus(dosiCode));
    }
    const handleS1b3_2 = async (e) => {
        setS1b3_2(e.target.value);
        const sigunguCode = sigungus[e.target.value].code;
        setUpmeongdongs(await getUpmeongdong(sigunguCode));
    }
    const handleS1b3_3 = async (e) => {
        setS1b3_3(e.target.value);
    }


    const handleS1b4 = (e) => {
        setS1b4(e.target.value);
    }
    const handleS1b5 = ({target: {value}}) => {
        setS1b5(value);

        if (value === '1') {
            setS1b5_1Radio(true);
            setS1b5_2Radio(false);

            resetS1b5_2s();

        } else if (value === '2') {
            setS1b5_2Radio(true);
            setS1b5_1Radio(false);
            setS1b5_Etc1('')

            resetS1b5_1s();
        }
    }
    const resetS1b5_1s = () => {
        setS1b8('');

        setS1b11('');
        setS1b11b1('');
        setS1b11b2('');
        setS1b11b3('');
    }
    const resetS1b5_2s = () => {
        setS1b11b3('');
    }


    const handleS1b5_Etc1 = (e) => {
        setS1b5_Etc1(e.target.value);

        setS1b5('1');
        setS1b5_1Radio(true);
        setS1b5_2Radio(false);
    }

    useEffect(() => {
        setS1b6(s1b6Data.map((b, idx) => {
            if (b) return idx
        }).filter(a => a).toString());
    }, [s1b6Data]);
    const handleS1b6 = (e) => {
        setS1b6Data(s1b6Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))
    }

    useEffect(() => {
        setS1b7(s1b7Data.map((b, idx) => {
            if (b) return idx
        }).filter(a => a).toString());
    }, [s1b7Data]);
    const handleS1b7 = (e) => {
        // 최대 3개 선택 유효성 확인
        let checking = false;
        let checkedCount = 0;
        let checkable = false;
        s1b7Data.forEach((b, idx) => {
            if (b) checkedCount++
            if (!b && idx === Number(e.target.name)) checking = true;
        })
        if (checkedCount < 3) checkable = true;
        // 최대 3개시 중단
        if (checking && !checkable) {
            return
        }
        //

        setS1b7Data(s1b7Data.map((b, idx) => {
            if (idx === Number(e.target.name)) {
                return !b
            } else {
                return b
            }
        }))
    }

    const handleS1b8 = (e) => {
        setS1b8(e.target.value);
    }
    const handleS1b9 = (e) => {
        setS1b9(e.target.value);
    }
    const handleS1b10 = (e) => {
        setS1b10(e.target.value);
    }

    const handleS1b11 = (e) => {
        setS1b11(e.target.value);

        if (e.target.value === '1') {
            resetS1b11_2s();
        }
        else if (e.target.value === '2') {
            resetS1b11_1s();
        }
    }
    const resetS1b11_1s = () => {
        setS1b11b1('');
        setS1b11b2('');
    }
    const resetS1b11_2s = () => {
        setS1b11b3('');
    }

    const handleS1b11b1 = (e) => {
        setS1b11b1(e.target.value);
    }

    const handleS1b11b2 = (e) => {
        setS1b11b2(e.target.value);
    }

    const handleS1b11b3 = (e) => {
        setS1b11b3(e.target.value);
    }

    const handleS1b12_1 = ({target: {value}}) => {
        if (value.length > 3) {
            return
        }

        setS1b12_1(value);
    }
    const handleS1b12_2 = ({target: {value}}) => {
        if (value.length > 4) {
            return
        }

        setS1b12_2(value);
    }
    const handleS1b12_3 = ({target: {value}}) => {
        if (value.length > 4) {
            return
        }

        setS1b12_3(value);
    }

    const validateAllWritten = () => {
        if (
            s1b1 === '' ||
            s1b2 === '' ||
            s1b3_1 === '' || s1b3_2 === '' || s1b3_3 === '' ||
            s1b4 === '' ||
            s1b5 === '' ||
            s1b6 === '' ||
            s1b7 === '' ||
            s1b9 === '' ||
            s1b10 === '' ||
            s1b12_1 === '' ||
            s1b12_2 === '' ||
            s1b12_3 === ''
        ) {
            return false
        }


        if (s1b5 === '1') {
            if (
                s1b5_Etc1 === '' ||
                s1b8 === '' ||
                s1b11 === ''
            ) {
                return false;
            }


            if (s1b11 === '1') {
                if (s1b11b1 === '' || s1b11b2 === '')
                    return false;
            }

            if (s1b11 === '2') {
                if (s1b11b3 === '')
                    return false;
            }
        }


        if (s1b5 === '2') {
            if (s1b11b3 === '')
                return false;
        }


        return true
    }

    const saveSector1Data = () => {
        const sector1DataObject = {
            's1b1': s1b1,
            's1b2': s1b2,
            's1b3': dosis[s1b3_1].name + ' ' + sigungus[s1b3_2].name + ' ' + upmeongdongs[s1b3_3].name,
            's1b4': s1b4,
            's1b5': s1b5 === '1' ? '1,' + s1b5_Etc1 : s1b5,
            's1b6': s1b6,
            's1b7': s1b7,
            's1b8': s1b8,
            's1b9': s1b9,
            's1b10': s1b10,
            's1b11': s1b11,
            's1b11b1': s1b11b1,
            's1b11b2': s1b11b2,
            's1b11b3': s1b11b3,
            's1b12': s1b12_1 + s1b12_2 + s1b12_3,
        }

        localStorage.setItem('sector1', JSON.stringify(sector1DataObject))

    }

    const moveNextSector = () => {
        if (!validateAllWritten()) {
            setAlertOpen(true)
            return
        }

        saveSector1Data()
        if (s1b5 === '2') {
            localStorage.setItem("farmer", "false");
            navigate('/3');
        } else {
            localStorage.setItem("farmer", "true");
            navigate('/2')
        }
    }

    return (
        <Background>
            <TextBlock>
                <BigText>
                    청년농업인 농지이용실태 및 농지수요 설문조사
                </BigText>
            </TextBlock>
            <TextBlock start>
                안녕하십니까? <br/>
                <br/>
                &nbsp;<strong><em>한국농어촌공사 농어촌연구원은 『청년농업인들의 농지수요』를 파악하기 위하여 설문조사를 진행하고 있습니다.</em></strong> 응답해 주신 정보는 연구의 목적으로만 사용될 것이며,
                <strong><em>본 조사의 설문 내용 및 개인 신상은 통계법 제33조에 의해 비밀이 보장</em></strong>됨을 알려드립니다.<br/>
                &nbsp;귀한 시간을 내어 응답해 주신 분께는 추첨을 통해 소정의 모바일 상품권을 보내드리고자 하오니 설문지 내에 연락처를 기재해주시기를 바라며, 조사에 대하여 문의 사항이 있으시면 아래로 연락하여 주십시오.<br/>
                <br/>
                <br/>
                ※ 연구수행기관 : <em>한국농어촌공사 농어촌연구원, 한국농업경제학회</em><br/>
                ※ 연구책임자 : <em>이향미 책임연구원(061-338-5467)</em><br/>
                ※ 조사책임자 : <em>문한필 전남대학교 교수(062-530-2173)</em><br/>
                <br/>
                <strong><em>※ 본 설문조사는 컴퓨터 크롬 브라우저에 최적화되어 있으므로, 컴퓨터 진행해주시기 바랍니다.</em></strong><br/>
                <br/>
                <br/>
                <BoldText>
                    2022년 7월
                </BoldText>
                <BoldText big>
                    한국농어촌공사 농어촌연구원
                </BoldText>
            </TextBlock>


            <TitleBlock>
                1. 응답자 기본정보
            </TitleBlock>


            <strong><em>(2022년 7월 기준으로 응답 부탁드립니다.)</em></strong>
            <SmallQuestionBlock title={<div>1. 성별</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b1}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='남'/>
                            <FormControlLabel value='2' control={<Radio/>} label='여'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>


            <SmallQuestionBlock title={<div>2. 출생연도</div>}>
                <FormControl size={'small'}>
                    <Grid gridColumnProperty={"repeat(3,1fr)"}>
                        <Select displayEmpty value={s1b2} onChange={handleS1b2} autoWidth>
                            <MenuItem disabled value={''}><i>출생연도</i></MenuItem>
                            <MenuItem value={'1980'}>1980</MenuItem>
                            <MenuItem value={'1981'}>1981</MenuItem>
                            <MenuItem value={'1982'}>1982</MenuItem>
                            <MenuItem value={'1983'}>1983</MenuItem>
                            <MenuItem value={'1984'}>1984</MenuItem>
                            <MenuItem value={'1985'}>1985</MenuItem>
                            <MenuItem value={'1986'}>1986</MenuItem>
                            <MenuItem value={'1987'}>1987</MenuItem>
                            <MenuItem value={'1988'}>1988</MenuItem>
                            <MenuItem value={'1989'}>1989</MenuItem>
                            <MenuItem value={'1990'}>1990</MenuItem>
                            <MenuItem value={'1991'}>1991</MenuItem>
                            <MenuItem value={'1992'}>1992</MenuItem>
                            <MenuItem value={'1993'}>1993</MenuItem>
                            <MenuItem value={'1994'}>1994</MenuItem>
                            <MenuItem value={'1995'}>1995</MenuItem>
                            <MenuItem value={'1996'}>1996</MenuItem>
                            <MenuItem value={'1997'}>1997</MenuItem>
                            <MenuItem value={'1998'}>1998</MenuItem>
                            <MenuItem value={'1999'}>1999</MenuItem>
                            <MenuItem value={'2000'}>2000</MenuItem>
                            <MenuItem value={'2001'}>2001</MenuItem>
                            <MenuItem value={'2002'}>2002</MenuItem>
                            <MenuItem value={'2003'}>2003</MenuItem>
                            <MenuItem value={'2004'}>2004</MenuItem>
                            <MenuItem value={'2005'}>2005</MenuItem>
                        </Select>
                    </Grid>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>3. 거주지 주소</div>}>
                <Grid gridColumnProperty={"3fr 1fr 3fr 1fr 3fr"}>
                    <FormControl fullWidth size={'small'}>
                        <Select displayEmpty value={s1b3_1} onChange={handleS1b3_1}>
                            <MenuItem disabled value={''}><i>도·시</i></MenuItem>
                            {
                                dosis?.map((dosi, idx) => <MenuItem key={dosi.code} value={idx}>{dosi.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <div/>
                    <FormControl fullWidth size={'small'}>
                        <Select displayEmpty value={s1b3_2} onChange={handleS1b3_2}>
                            <MenuItem disabled value={''}><i>시·군·구</i></MenuItem>
                            {
                                sigungus?.map((sigungu, idx) => <MenuItem key={sigungu.code}
                                                                          value={idx}>{sigungu.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <div/>
                    <FormControl fullWidth size={'small'}>
                        <Select displayEmpty value={s1b3_3} onChange={handleS1b3_3}>
                            <MenuItem disabled value={''}><i>읍·면·동</i></MenuItem>
                            {
                                upmeongdongs?.map((upmeongdong, idx) => <MenuItem key={upmeongdong.code}
                                                                                  value={idx}>{upmeongdong.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>4. 영농지 위치</div>}
                                announcement={<em>※ 영농지는 가장 큰 규모의 농지를 기준으로 응답해주세요.</em>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b4}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label={<div>거주지 인근<br/>(도보 10분이내)</div>}/>
                            <FormControlLabel value='2' control={<Radio/>} label='차로 10분 이내'/>
                            <FormControlLabel value='3' control={<Radio/>} label='차로 20분 이내'/>
                            <FormControlLabel value='4' control={<Radio/>} label='차로 30분 이내'/>
                            <FormControlLabel value='5' control={<Radio/>} label='차로 40분 이내'/>
                            <FormControlLabel value='6' control={<Radio/>} label='차로 50분 이내'/>
                            <FormControlLabel value='8' control={<Radio/>} label='차로 1시간 이내'/>
                            <FormControlLabel value='7' control={<Radio/>} label='차로 1시간 이상'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>5. 영농 시작연도</div>}>
                <FormControl size={'small'}>
                    <RadioGroup onChange={handleS1b5}>
                        <Stack direction='row'>
                            <FormControlLabel value='1' control={<Radio checked={s1b5_1Radio}/>}/>
                            <Select displayEmpty value={s1b5_Etc1} onChange={handleS1b5_Etc1} style={{ marginRight: 10}}>
                                <MenuItem value={''}><i>시작연도</i></MenuItem>
                                <MenuItem value={'1990'}>1990</MenuItem>
                                <MenuItem value={'1991'}>1991</MenuItem>
                                <MenuItem value={'1992'}>1992</MenuItem>
                                <MenuItem value={'1993'}>1993</MenuItem>
                                <MenuItem value={'1994'}>1994</MenuItem>
                                <MenuItem value={'1995'}>1995</MenuItem>
                                <MenuItem value={'1996'}>1996</MenuItem>
                                <MenuItem value={'1997'}>1997</MenuItem>
                                <MenuItem value={'1998'}>1998</MenuItem>
                                <MenuItem value={'1999'}>1999</MenuItem>
                                <MenuItem value={'2000'}>2000</MenuItem>
                                <MenuItem value={'2001'}>2001</MenuItem>
                                <MenuItem value={'2002'}>2002</MenuItem>
                                <MenuItem value={'2003'}>2003</MenuItem>
                                <MenuItem value={'2004'}>2004</MenuItem>
                                <MenuItem value={'2005'}>2005</MenuItem>
                                <MenuItem value={'2006'}>2006</MenuItem>
                                <MenuItem value={'2007'}>2007</MenuItem>
                                <MenuItem value={'2008'}>2008</MenuItem>
                                <MenuItem value={'2009'}>2009</MenuItem>
                                <MenuItem value={'2010'}>2010</MenuItem>
                                <MenuItem value={'2011'}>2011</MenuItem>
                                <MenuItem value={'2012'}>2012</MenuItem>
                                <MenuItem value={'2013'}>2013</MenuItem>
                                <MenuItem value={'2014'}>2014</MenuItem>
                                <MenuItem value={'2015'}>2015</MenuItem>
                                <MenuItem value={'2016'}>2016</MenuItem>
                                <MenuItem value={'2017'}>2017</MenuItem>
                                <MenuItem value={'2018'}>2018</MenuItem>
                                <MenuItem value={'2019'}>2019</MenuItem>
                                <MenuItem value={'2020'}>2020</MenuItem>
                                <MenuItem value={'2021'}>2021</MenuItem>
                                <MenuItem value={'2022'}>2022</MenuItem>
                            </Select>
                            <CenterBox>년에 농사 시작</CenterBox>
                        </Stack>
                        <FormControlLabel value='2' control={<Radio checked={s1b5_2Radio}/>} label='아직 농사지은 경험이 없음'/>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>6. {s1b5 === '2' && '희망'} 영농형태<br/><strong>(중복답변 가능)</strong></div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b6}>
                        <Grid gridColumnProperty={"repeat(3,1fr)"}>
                            <FormControlLabel control={<Checkbox name='1' checked={s1b6Data[1]} onChange={handleS1b6}/>}
                                              label='논 (벼)'/>
                            <FormControlLabel control={<Checkbox name='2' checked={s1b6Data[2]} onChange={handleS1b6}/>}
                                              label='논 (타작물)'/>
                            <FormControlLabel control={<Checkbox name='3' checked={s1b6Data[3]} onChange={handleS1b6}/>}
                                              label='밭 (노지)'/>
                            <FormControlLabel control={<Checkbox name='4' checked={s1b6Data[4]} onChange={handleS1b6}/>}
                                              label='시설원예'/>
                            <FormControlLabel control={<Checkbox name='5' checked={s1b6Data[5]} onChange={handleS1b6}/>}
                                              label='과수'/>
                            <FormControlLabel control={<Checkbox name='6' checked={s1b6Data[6]} onChange={handleS1b6}/>}
                                              label='축산'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>

            <SmallQuestionBlock title={<div>7. {s1b5 === '2' ? '희망' : '주요'} 생산 품목<br/><strong>(최대 3개 선택 <br/>가능)</strong></div>}>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={"repeat(5,1fr)"}>
                        <FormControlLabel control={<Checkbox name='1' checked={s1b7Data[1]} onChange={handleS1b7}/>}
                                          label='미곡'/>
                        <FormControlLabel control={<Checkbox name='2' checked={s1b7Data[2]} onChange={handleS1b7}/>}
                                          label='맥류'/>
                        <FormControlLabel control={<Checkbox name='3' checked={s1b7Data[3]} onChange={handleS1b7}/>}
                                          label='잡곡'/>
                        <FormControlLabel control={<Checkbox name='4' checked={s1b7Data[4]} onChange={handleS1b7}/>}
                                          label='두류'/>
                        <FormControlLabel control={<Checkbox name='5' checked={s1b7Data[5]} onChange={handleS1b7}/>}
                                          label='서류'/>
                        <FormControlLabel control={<Checkbox name='6' checked={s1b7Data[6]} onChange={handleS1b7}/>}
                                          label='채소'/>
                        <FormControlLabel control={<Checkbox name='7' checked={s1b7Data[7]} onChange={handleS1b7}/>}
                                          label='과수'/>
                        <FormControlLabel control={<Checkbox name='8' checked={s1b7Data[8]} onChange={handleS1b7}/>}
                                          label='화훼'/>
                        <FormControlLabel control={<Checkbox name='9' checked={s1b7Data[9]} onChange={handleS1b7}/>}
                                          label='특용작물'/>
                        <FormControlLabel
                            control={<Checkbox name='10' checked={s1b7Data[10]} onChange={handleS1b7}/>}
                            label='축산'/>
                    </Grid>
                </FormControl>
            </SmallQuestionBlock>


            {
                (s1b5 === '1') &&
                <>
                    <SmallQuestionBlock title={<div>8. 농가소득 수준 <br/><strong>(연소득 기준)</strong></div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS1b8}>
                                <Grid gridColumnProperty={"repeat(4,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='1천만원미만'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='1-2천만원미만'/>
                                    <FormControlLabel value='3' control={<Radio/>} label='2-3천만원미만'/>
                                    <FormControlLabel value='4' control={<Radio/>} label='3-4천만원미만'/>
                                    <FormControlLabel value='5' control={<Radio/>} label='4-5천만원미만'/>
                                    <FormControlLabel value='6' control={<Radio/>} label='5-6천만원미만'/>
                                    <FormControlLabel value='7' control={<Radio/>} label='6-7천만원미만'/>
                                    <FormControlLabel value='8' control={<Radio/>} label='7-8천만원미만'/>
                                    <FormControlLabel value='9' control={<Radio/>} label='8-9천만원미만'/>
                                    <FormControlLabel value='10' control={<Radio/>} label='9천만원-1억원미만'/>
                                    <FormControlLabel value='11' control={<Radio/>} label='1억원이상'/>
                                    <FormControlLabel value='12' control={<Radio/>} label={<div>미취업 또는<br/>소득없음</div>}/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </SmallQuestionBlock>
                </>
            }


            <SmallQuestionBlock title={<div>9. {s1b5 === '2' && '희망'} 농가형태</div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b9}>
                        <FormControlLabel value='1' control={<Radio/>}
                                          label='전업농가 (영리목적으로 30일 이상 농사 이외의 일에 종사한 가구원 없음)'/>
                        <FormControlLabel value='2' control={<Radio/>} label='1종겸업농가 (농업수입이 농외소득보다 많음)'/>
                        <FormControlLabel value='3' control={<Radio/>} label='2종겸업농가 (농업수입이 농외소득보다 적음)'/>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>


            <SmallQuestionBlock title={<div>10. {s1b5 === '2' && '장래'} 영농 승계 여부<br/><strong>(부모·친지·지인으로 부터)</strong></div>}>
                <FormControl fullWidth>
                    <RadioGroup onChange={handleS1b10}>
                        <Grid gridColumnProperty={"repeat(2,1fr)"}>
                            <FormControlLabel value='1' control={<Radio/>} label='예'/>
                            <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </SmallQuestionBlock>


            {
                (s1b5 === '1') &&
                <>
                    <SmallQuestionBlock title={<div>11. 현재 스마트팜 운영 여부</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS1b11}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='예'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='아니요'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </SmallQuestionBlock>


                    {
                        (s1b11 === '1') &&
                        <>
                            <SmallQuestionBlock title={<div>11-1. 스마트팜 유형</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS1b11b1}>
                                        <Grid gridColumnProperty={"repeat(4,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label={<div>시설원예 <br/>스마트팜</div>}/>
                                            <FormControlLabel value='2' control={<Radio/>} label='과수 스마트팜'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='노지 스마트팜'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='스마트 축사'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </SmallQuestionBlock>


                            <SmallQuestionBlock title={<div>11-2. 장래 스마트팜 수요(설비/면적)</div>}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleS1b11b2}>
                                        <Grid gridColumnProperty={"repeat(1,1fr)"}>
                                            <FormControlLabel value='1' control={<Radio/>} label='스마트팜 시설과 면적 모두 유지한다.'/>
                                            <FormControlLabel value='2' control={<Radio/>} label='스마트팜 시설은 확충하고 면적은 유지한다.'/>
                                            <FormControlLabel value='3' control={<Radio/>} label='스마트팜 시설과 면적 모두 늘린다.'/>
                                            <FormControlLabel value='4' control={<Radio/>} label='스마트팜 시설은 유지하고 면적은 확대한다.'/>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </SmallQuestionBlock>
                        </>
                    }
                </>
            }


            {
                (s1b11 === '2' || s1b5 === '2') &&
                <>
                    <SmallQuestionBlock title={<div>11-3. 장래 스마트팜 계획 여부</div>}>
                        <FormControl fullWidth>
                            <RadioGroup onChange={handleS1b11b3}>
                                <Grid gridColumnProperty={"repeat(2,1fr)"}>
                                    <FormControlLabel value='1' control={<Radio/>} label='예'/>
                                    <FormControlLabel value='2' control={<Radio/>} label='아니오'/>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </SmallQuestionBlock>
                </>
            }


            <SmallQuestionBlock title={<div>12. 연락처(휴대폰)</div>}>
                <FormControl fullWidth>
                    <Grid gridColumnProperty={"repeat(5,1fr)"}>
                        <TextField placeholder='010' type='number' value={s1b12_1} onChange={handleS1b12_1} size={'small'} inputProps={{style: {textAlign: 'center'}}}/>
                        <CenterBox size={20}>-</CenterBox>
                        <TextField placeholder='1234' type='number' value={s1b12_2} onChange={handleS1b12_2} size={'small'} inputProps={{style: {textAlign: 'center'}}}/>
                        <CenterBox size={20}>-</CenterBox>
                        <TextField placeholder='5678' type='number' value={s1b12_3} onChange={handleS1b12_3} size={'small'} inputProps={{style: {textAlign: 'center'}}}/>
                    </Grid>
                </FormControl>
            </SmallQuestionBlock>

            <SectorFooter farmer={"true"} sector={1} moveNextSector={moveNextSector} alertOpen={alertOpen}
                          setAlertOpen={setAlertOpen}/>
        </Background>
    )
}

const BigText = styled.div`
  font-size: 25px;
  line-height: 28px;
`

const BoldText = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.big ? 25 : 20}px;
  font-weight: bold;
`

export default Sector1;
